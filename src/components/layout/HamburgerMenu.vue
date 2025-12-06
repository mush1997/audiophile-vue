<script setup>
import MenuList from '@/components/shared/MenuList.vue'
import { useMenuStore } from '@/stores/menu'
import { storeToRefs } from 'pinia'

const { hideMenu } = storeToRefs(useMenuStore())
</script>

<template>
    <MenuList class="menu" :class="{ 'hide': hideMenu }" />
</template>

<style lang="scss" scoped>
.hide {
    display: none;
}

@media screen and (max-width:1024px) {
    .menu {
        margin: 0;
        padding: 96px 40px;
        background-color: $white;
        position: absolute;
        top: 92px;
        left: 0;
        z-index: 10;
        animation: showing 0.8s forwards;
    }
}

@media screen and (max-width:500px) {
    .menu {
        padding: 40px 24px;
    }
}
</style>