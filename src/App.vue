<script setup>
import { defineAsyncComponent } from 'vue'

const HeaderSection = defineAsyncComponent(() => import('@/components/HeaderSection.vue'))
const MenuList = defineAsyncComponent(() => import('@/components/MenuList.vue'))
const AsideSection = defineAsyncComponent(() => import('@/components/AsideSection.vue'))
const FooterSection = defineAsyncComponent(() => import('@/components/FooterSection.vue'))
const BgShadow = defineAsyncComponent(() => import('@/components/BgShadow.vue'))
</script>

<template>
  <HeaderSection v-show="$route.name !== 'Home' && $route.name !== 'Category'" />
  <router-view />
  <MenuList v-show="$route.name !== 'Home' && $route.name !== 'Checkout'" />
  <AsideSection v-show="$route.name !== 'Checkout'" />
  <FooterSection />
  <BgShadow />
</template>

<style lang="scss" src="@/styles/shared-setting.scss"></style>