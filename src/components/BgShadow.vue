<script setup>
import { useShadowStore } from '@/stores/shadow'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

const { menuShadow, cartShadow, alertShadow, modalShadow } = storeToRefs(useShadowStore())
const shadowClass = computed(() => ({ 'menuShadow': menuShadow.value, 'cartShadow': cartShadow.value, 'alertShadow': alertShadow.value, 'modalShadow': modalShadow.value }))
</script>

<template>
    <div class="shadow" :class="shadowClass"></div>
</template>

<style lang="scss" scoped>
.shadow {
    content: '';
    width: 100%;
    height: 100vh;
    background-color: $gray;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    z-index: 1;
    visibility: hidden;
}

.shadow.menuShadow,
.shadow.cartShadow,
.shadow.modalShadow {
    visibility: visible;
    animation: normalShadow 0.6s forwards;
}

.shadow.alertShadow {
    visibility: visible;
    animation: alertShadow 0.4s forwards;
    z-index: 15;
}

@keyframes normalShadow {
    from {
        opacity: 0;
    }

    to {
        opacity: 0.5;
    }
}

@keyframes alertShadow {
    from {
        opacity: 0;
    }

    to {
        opacity: 0.8;
    }
}
</style>