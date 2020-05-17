<template>
  <div class="selectbox d-flex w-100 justify-content-center">
    <label for="" class="left d-flex align-items-center px-1"><span>{{ leftLabel }}</span></label>
    <input type="text" class="center pl-1" placeholder="Other" @input="$emit('input', inputVal)" v-model="inputVal">
    <select class="right" @change="$emit('change', selectVal)" v-model="selectVal" :value="selectVal">
        <optgroup>
            <option 
                v-for="(item, index) of items" 
                :key="index" 
                :value="index" 
                :selected="index === selectVal"
            >{{ item.code }} | {{ item.name }}</option>
        </optgroup>
    </select>
  </div>
</template>

<script>
export default {
    props: {
        items: {
            type: Array
        },
        selected: {
            
        },
        val: {
            default: ''
        },
        leftLabel: {
            default: ''
        }
    },
    data() {
        return {
            selectVal: null,
            inputVal: null
        }
    },
    watch: {
        selected: {
            handler() {
                this.selectVal = this.selected;
            }
        },
        val: {
            handler() {
                this.inputVal = this.val;
            }
        }
    }
}
</script>

<style lang="sass">
    .selectbox
        label, input, select
            height: 50px
            outline: none
        select.right
            cursor: pointer
            border: 1px solid rgb(81, 81, 81)
            border-top-right-radius: 5px
            border-bottom-right-radius: 5px
            border-left: 0
            max-width: 55px
        input.center
            border: 1px solid rgb(81, 81, 81)
            border-right: 0
            border-left: 0
            font-size: 1.1em
            color: #4c85db
        label.left
            border: 1px solid rgb(81, 81, 81)
            border-right: 0
            width: 15px
            border-top-left-radius: 5px!important
            border-bottom-left-radius: 5px!important
            border-top-right-radius: 0!important
            border-bottom-right-radius: 0!important
            margin-bottom: 0!important
            background: #fff

</style>