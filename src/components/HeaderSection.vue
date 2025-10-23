<script setup>
import NavBar from '@/components/NavBar.vue'
import HamburgerMenu from '@/components/HamburgerMenu.vue'
</script>

<template>
    <header>
        <NavBar />
        <HamburgerMenu />
        <slot></slot>
    </header>
</template>

<style lang="scss" scoped>
header {
    width: 100%;
    background-color: $black;
}
</style>