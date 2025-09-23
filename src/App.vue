<script setup>
import { defineAsyncComponent } from 'vue'

const BgShadow = defineAsyncComponent(() => import('@/components/BgShadow.vue'))
const AsideSection = defineAsyncComponent(() => import('@/components/AsideSection.vue'))
const FooterSection = defineAsyncComponent(() => import('@/components/FooterSection.vue'))
</script>

<template>
  <BgShadow />
  <router-view />
  <AsideSection v-show="$route.name !== 'Checkout' && $route.name !== 'NotFound'" />
  <FooterSection />
</template>

<style lang="scss" src="@/styles/shared-setting.scss"></style>