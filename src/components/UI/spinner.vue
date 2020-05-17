<template>
    <div class="spinnerwrapper d-flex flex-column align-items-center justify-content-center">
        <div class="spinner mb-5">
            <div class="dot1"></div>
            <div class="dot2"></div>
        </div>
        <span class="spinnermsg">DONATING...</span>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    .spinnerwrapper {
        position: absolute;
        top: 0;
        z-index: 2;
        width: 100%;
        height: 100%;
        background: #d35400;
    }
    .spinnermsg {
        font-size: 2em;
        color: white;
    }
    .spinner {
        width: 80px;
        height: 80px;
        text-align: center;
        
        -webkit-animation: sk-rotate 2.0s infinite linear;
        animation: sk-rotate 2.0s infinite linear;
    }

    .dot1, .dot2 {
        width: 60%;
        height: 60%;
        display: inline-block;
        position: absolute;
        top: 0;
        background-color: #fff;
        border-radius: 100%;
        
        -webkit-animation: sk-bounce 2.0s infinite ease-in-out;
        animation: sk-bounce 2.0s infinite ease-in-out;
    }

    .dot2 {
        top: auto;
        bottom: 0;
        -webkit-animation-delay: -1.0s;
        animation-delay: -1.0s;
    }

    @-webkit-keyframes sk-rotate { 100% { -webkit-transform: rotate(360deg) }}
    @keyframes sk-rotate { 100% { transform: rotate(360deg); -webkit-transform: rotate(360deg) }}

    @-webkit-keyframes sk-bounce {
        0%, 100% { -webkit-transform: scale(0.0) }
        50% { -webkit-transform: scale(1.0) }
    }

    @keyframes sk-bounce {
        0%, 100% { 
            transform: scale(0.0);
            -webkit-transform: scale(0.0);
        } 50% { 
            transform: scale(1.0);
            -webkit-transform: scale(1.0);
        }
    }
</style>