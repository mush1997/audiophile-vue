<script setup>
import HeaderSection from '@/components/HeaderSection.vue'
import MenuList from '@/components/MenuList.vue'
import AsideSection from '@/components/AsideSection.vue'
import FooterSection from '@/components/FooterSection.vue'
import BgShadow from '@/components/BgShadow.vue'
import { defineAsyncComponent } from 'vue'

const ShoppingCart = defineAsyncComponent(() => import('@/components/ShoppingCart.vue'))
</script>

<template>
    <!-- <HeaderSection v-show="$route.name !== 'Home' && $route.name !== 'Category'" /> -->
    <!-- <router-view v-slot="{ Component, route }">
        <Transition :name="route.meta.transition || 'slide'" mode="out-in">
            <component :is="Component" :key="route.path" />
        </Transition>
    </router-view> -->
    <p>123456789</p>
    <!-- <MenuList v-show="$route.name !== 'Home' && $route.name !== 'Checkout'" /> -->
    <!-- <AsideSection v-show="$route.name !== 'Checkout'" /> -->
    <FooterSection v-once />
    <BgShadow v-once />
    <ShoppingCart />
</template>

<style lang="scss">
.slide-enter-from {
    opacity: 0;
    transform: translateY(-80px);
}

.slide-leave-to {
    opacity: 0;
    transform: translateY(80px);
}

.slide-enter-active,
.slide-leave-active {
    transition: all 0.4s ease-out;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.4s ease-out;
}
</style>