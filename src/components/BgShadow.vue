<script setup>
import { useShadowStore } from '@/stores/shadow'
import { storeToRefs } from 'pinia'

const { menuShadow, cartShadow, alertShadow } = storeToRefs(useShadowStore())
</script>

<template>
    <div class="shadow" :class="{ 'menuShadow': menuShadow, 'cartShadow': cartShadow, 'alertShadow': alertShadow }">
    </div>
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

.shadow.menuShadow {
    visibility: visible;
    animation: menuShadow 0.6s forwards;
}

.shadow.cartShadow {
    visibility: visible;
    animation: cartShadow 0.6s forwards;
}

.shadow.alertShadow {
    visibility: visible;
    animation: alertShadow 0.4s forwards;
    z-index: 15;
}

@keyframes menuShadow {
    from {
        opacity: 0;
    }

    to {
        opacity: 0.5;
    }
}

@keyframes cartShadow {
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