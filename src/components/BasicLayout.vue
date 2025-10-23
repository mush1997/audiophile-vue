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
    <HeaderSection v-show="$route.name !== 'Home' && $route.name !== 'Category'" />
    <router-view />
    <MenuList v-show="$route.name !== 'Home' && $route.name !== 'Checkout'" />
    <AsideSection v-show="$route.name !== 'Checkout'" />
    <FooterSection v-once />
    <BgShadow v-once />
    <ShoppingCart />
</template>