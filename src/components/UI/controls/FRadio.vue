<template>
  <div class="wrp">
    <input class="hidden" type="radio" :id="`id_${id}`" :name="group" @input="$parent.$emit('input', val)" :checked="active == val">
    <label :for="`id_${id}`" class="btn w-100 h-100 d-flex align-items-center justify-content-center">
        <span>{{ addBefore }}{{ val }}{{ addAfter }}</span>
    </label>
  </div>
</template>

<script>
export default {
    props: ['val', 'addBefore', 'addAfter', 'id', 'group', 'active']
}
</script>

<style>
    .wrp {
        border-radius: 10px!important;
        width: 80px;
        height: 40px;
        padding: 0!important;
        margin-bottom: 10px;
        background: #f5f5f7;
        border-color: rgb(81, 81, 81);
        box-shadow: 0 1px 3px rgba(0, 0, 0, .25);
        color: #515151;
    }

    input.hidden {
        display: none;
    }
    label {
        border-radius: 10px!important;
        margin: 0;
        box-sizing: border-box;
        padding: 0;
        font-size: 0.9em!important;
    }

    input:checked + label {
        color: #f5f5f7;
        background: #5087d9;
    }
</style>