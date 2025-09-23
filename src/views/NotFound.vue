<script setup>
import HeaderSection from '@/components/HeaderSection.vue'
</script>

<template>
    <HeaderSection />
    <main>
        <h1>Oops! We cannot find the page you required.</h1>
        <p>Please click <router-link to="/">here</router-link> to homepage.</p>
    </main>
</template>

<style lang="scss" scoped>
h1 {
    margin: 24px 0;
    font-size: 40px;
    line-height: 52px;
    letter-spacing: 1px;
    text-transform: none;
}
</style>
