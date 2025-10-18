<script setup>
import { defineAsyncComponent } from 'vue'

const HeaderSection = defineAsyncComponent(() => import('@/components/HeaderSection.vue'))
const MenuList = defineAsyncComponent(() => import('@/components/MenuList.vue'))
const BgShadow = defineAsyncComponent(() => import('@/components/BgShadow.vue'))
const ShoppingCart = defineAsyncComponent(() => import('@/components/ShoppingCart.vue'))
const AsideSection = defineAsyncComponent(() => import('@/components/AsideSection.vue'))
const FooterSection = defineAsyncComponent(() => import('@/components/FooterSection.vue'))
</script>

<template>
    <HeaderSection v-show="$route.name !== 'Home' && $route.name !== 'Category'" />
    <router-view />
    <MenuList v-show="$route.name !== 'Home' && $route.name !== 'Checkout'" />
    <BgShadow v-once />
    <ShoppingCart />
    <AsideSection v-show="$route.name !== 'Checkout'" />
    <FooterSection v-once />
</template>