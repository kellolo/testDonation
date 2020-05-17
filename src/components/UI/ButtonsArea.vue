<template>
    <div class="d-flex justify-content-around flex-wrap">
        <FRadio 
            v-for="(preset, index) of presets" 
            :key="index" 
            :addBefore="currency" 
            :addAfter="',00'" 
            :val="preset"
            :group="'donates'"
            :id="index"
            :active="active"
        />
    </div>
</template>

<script>
import FRadio from './controls/FRadio.vue'
export default {
    components: { FRadio },
    props: {
        presets: {
            type: Array
        },
        currency: {
            default: 0
        },
        active: {}
    }
}
</script>

<style>

</style>