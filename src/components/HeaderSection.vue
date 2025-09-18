<script setup>
import NavBar from '@/components/NavBar.vue';
</script>

<template>
    <header>
        <NavBar />
        <slot></slot>
    </header>
</template>

<style lang="scss" scoped>
header {
    width: 100%;
    background-color: $black;
}
</style>