<template>
    <div class="alert d-flex flex-column justify-content-center align-items-center" 
    :class="{
        'alert-success': type == 'success',
        'alert-danger': type == 'danger',
    }" 
    role="alert">
        <span>{{ text }}</span>
        <button type="button" class="btn btn-light" @click="$emit('close')">Close</button>
    </div>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            default: 'Alert!'
        },
        type: {
            type: String,
            default: 'success'
        }
    }
}
</script>
<style>
    .alert {
        position: absolute!important;
        right: 20px;
        top: 10px;
    }
</style>