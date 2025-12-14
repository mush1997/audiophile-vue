<script setup>
import NavBar from '@/components/layout/NavBar.vue'
import HamburgerMenu from '@/components/layout/HamburgerMenu.vue'
import LatestProduct from '@/components/home/LatestProduct.vue'
</script>

<template>
    <header :class="{ 'home': $route.name === 'Home' }">
        <NavBar />
        <HamburgerMenu />
        <Transition name="slideText" appear>
            <LatestProduct v-show="$route.name === 'Home'" />
        </Transition>
    </header>
</template>

<style lang="scss" scoped>
header {
    width: 100%;
    background-color: $black;
}

.home {
    height: 730px;
    background-image: url("@/assets/home/desktop/image-hero.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}

.slideText-enter-from {
    opacity: 0;
    transform: translateY(-60px);
}

.slideText-enter-active {
    transition: all 0.4s ease-out;
}

@media screen and (max-width:1024px) {
    .home {
        background-image: url("@/assets/home/tablet/image-header.jpg");
        background-position: bottom center;
    }
}

@media screen and (max-width:500px) {
    .home {
        height: 600px;
        background-image: url("@/assets/home/mobile/image-header.jpg");
    }
}
</style>