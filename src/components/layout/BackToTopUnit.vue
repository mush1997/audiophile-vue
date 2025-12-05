<script setup>
import { useWindowScroll } from '@vueuse/core'
import { computed } from 'vue'

const { y } = useWindowScroll()
const showBtn = computed(() => y.value > 200)

function backToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
    <div class="toTopBtn" :class="{ 'showBtn': showBtn }" @click="backToTop">
        <img src="@/assets/shared/desktop/icon-arrow-up.svg" alt="">
        <p>TOP</p>
    </div>
</template>

<style lang="scss" scoped>
.toTopBtn {
    width: 46px;
    height: 46px;
    border: 1px solid $white;
    background-color: $light_primary;
    opacity: 0;
    position: fixed;
    right: 24px;
    bottom: 24px;
    z-index: 100;
    visibility: hidden;
    transition: all 0.3s ease;

    img {
        margin: 8px auto;
        width: 18px;
        height: 9px;
        display: block;
    }

    p {
        width: 100%;
        font-size: 13px;
        line-height: 13px;
        color: $white;
        letter-spacing: 1px;
        text-align: center;
    }
}

.showBtn {
    opacity: 0.85;
    visibility: visible;
}

@keyframes bounce {
    0% {
        transform: translateY(0px);
    }

    25% {
        transform: translateY(-5px);
    }

    50% {
        transform: translateY(-10px);
    }

    75% {
        transform: translateY(-5px);
    }

    100% {
        transform: translateY(0px);
    }
}

@media screen and (hover: hover) {
    .toTopBtn:hover {
        cursor: pointer;
        background-color: $light_primary;
        animation: bounce 0.3s ease;
    }
}

@media screen and (max-width:1024px) {
    .toTopBtn {
        border-radius: 50%;
        border: none;

        img {
            margin: 18px auto;
        }

        p {
            display: none;
        }
    }

    .showBtn {
        opacity: 0.75;
    }
}

@media screen and (max-width:500px) {
    .toTopBtn {
        bottom: 36px;
    }
}
</style>