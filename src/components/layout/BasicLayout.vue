<script setup>
import HeaderSection from '@/components/layout/HeaderSection.vue'
import MenuList from '@/components/shared/MenuList.vue'
import AsideSection from '@/components/layout/AsideSection.vue'
import FooterSection from '@/components/layout/FooterSection.vue'
import BgShadow from '@/components/layout/BgShadow.vue'
import BackToTopUnit from '@/components/layout/BackToTopUnit.vue'

import { useRoute } from 'vue-router'
import { defineAsyncComponent, watchEffect, onWatcherCleanup, nextTick } from 'vue'

const ShoppingCart = defineAsyncComponent(() => import('@/components/cart/ShoppingCart.vue'))
const route = useRoute()

watchEffect(() => {
    if (!route.meta.title) { return }
    let timerID

    onWatcherCleanup(() => {
        if (timerID) { clearTimeout(timerID) }
    })

    nextTick(() => {
        timerID = setTimeout(() => { document.title = route.meta.title }, 50)
    })

})
</script>

<template>
    <HeaderSection />
    <router-view v-slot="{ Component, route }">
        <Transition :name="route.meta.transition">
            <component :is="Component" :key="route.path" />
        </Transition>
    </router-view>
    <MenuList v-show="$route.name !== 'Home' && $route.name !== 'Checkout'" />
    <AsideSection v-show="$route.name !== 'Checkout'" />
    <FooterSection />
    <BgShadow />
    <BackToTopUnit />
    <ShoppingCart />
</template>

<style lang="scss">
.slide-enter-from {
    opacity: 0;
    transform: translateY(-80px);
}

.slide-enter-active {
    transition: all 0.5s ease-in-out;
}

.fade-enter-from {
    opacity: 0;
}

.fade-enter-active {
    transition: opacity 0.6s ease-in-out;
}
</style>