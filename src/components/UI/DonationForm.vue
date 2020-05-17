<template>
    <div class="w-100 h-100 d-flex justify-content-center">
        <form action="#" class="d-flex flex-column px-2 align-items-center py-3" id="donate_form">
            <div class="fieldset mb-2">
                <buttons-area 
                    :presets="presets" 
                    :currency="getSymbol" 
                    v-model="suggestion" 
                    :active="suggestion"
                />
            </div>
            <div class="fieldset mb-2">
                <SelectBox 
                    :items="currencies" 
                    :selected="currency" 
                    :val="suggestion" 
                    v-model="suggestion" 
                    @change="changePresets"
                    :leftLabel="getSymbol"
                />
            </div>
            <button type="button" class="btn btn-primary w-50 mx-auto" @click="donate">DONATE</button>
        </form>
        <alert v-if="showAlert" @close="showAlert = false" :text="alert.text" :type="alert.type"/>
    </div>
</template>

<script>
import ButtonsArea from './ButtonsArea.vue'
import SelectBox from './controls/SelectBox.vue'
import Alert from './alert.vue'

export default {
    components: { ButtonsArea, SelectBox, Alert },
    props: {
        temp: {
            type: Object,
            default: () => ({
                presets: [40, 100, 200, 1000, 2500, 5000],
                suggestion: null,
                currency: 0,
                currencies: [
                    {name: "US Dollar", code: "USD", symbol: "$", rate: 1},
                    {name: "Euro", code: "EUR", symbol: "€", rate: 0.897597},
                    {name: "British Pound", code: "GBP", symbol: "£", rate: 0.81755},
                    {name: "Russian Ruble", code: "RUB", symbol: "₽", rate: 63.461993}
                ]
            }),
        }
    },
    data() {
        return {
            presets: [],
            suggestion: null,
            currency: 0,
            currencies: null,
            showAlert: false,
            alert: {
                type: '',
                text: ''
            }
        }
    },
    methods: {
        changePresets(payload) {
            this.currency = payload;
            let rate = this.currencies[this.currency].rate;
            this.presets = this.temp.presets.map(el => {
                //вычисляю примерное округление
                let appr = 1;
                let apprEl = el * rate;
                if (apprEl > 10 && apprEl <= 100) {
                    appr = 10;
                } else if (apprEl <= 1000 && apprEl > 100) {
                    appr = 100;
                } else if (apprEl > 1000 && apprEl <= 100000) {
                    appr = 500;
                } else if (apprEl > 100000) {
                    appr = 5000;
                }
                let num = Math.floor(el * rate / appr) * appr;
                //округляем до 500
                num = num > 1000 ? num - (num % 500) : num;

                return num;
            });
        },
        async donate() {
            if (this.suggestion > 0) {
                try {
                    this.$store.commit('toggleSpinner');
                    fetch('/api/donate', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            amount: this.suggestion,
                            currency: this.currencies[this.currency].code
                        })
                    })
                    .then(res => res.json())
                    .then(data => {
                        if (data.ok) {
                            this.alert.type = 'success';
                            this.alert.text = 'Thank You!';
                        }
                    })
                }
                catch {
                    this.alert.type = 'danger';
                    this.alert.text = 'Server Error!';
                }
                finally {
                    setTimeout(() => {
                        this.$store.commit('toggleSpinner');
                        this.showAlert = true;
                    }, 3000)
                }
            } else {
                this.alert.type = 'danger';
                this.alert.text = 'Minimum donation can not be 0';
                this.showAlert = true;
            }
        }
    },
    computed: {
        getSymbol() {
            return this.currency !== null && this.currencies ? this.currencies[this.currency].symbol : '';
        }
    },
    mounted() {
        this.presets = this.temp.presets;
        this.currency = this.temp.currency;
        this.currencies = this.temp.currencies;
    }
}
</script>

<style>
    .button_sum input[type=radio] {
        display: none;
    }
    .fieldset {
        width: 90%;
    }
    .button_sum {
        width: 80px;
        height: 30px;
        background: #5087d9!important;
        border: none!important;
        margin: 0 2px;
    }
    .button_sum:active {
        background: #f00;
    }
</style>