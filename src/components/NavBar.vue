<script setup>
import NavLinks from '@/components/NavLinks.vue'
import { useMenuStore } from '@/stores/menu'
const { showHideMenu } = useMenuStore()
</script>

<template>
    <nav>
        <img class="menuBtn" src="@/assets/shared/tablet/icon-hamburger.svg" alt="menu" @click="showHideMenu">
        <img class="logo" src="@/assets/shared/desktop/logo.svg" alt="logo"
            @click="$router.push({ path: '/' }).catch(error => error)">
        <NavLinks />
        <img class="cartBtn" src="@/assets/shared/desktop/icon-cart.svg" alt="cart">
    </nav>
</template>

<style lang="scss" scoped>
nav {
    margin: 0 11%;
    padding: 32px 0;
    height: 92px;
    border-bottom: 1px solid $dark_gray;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    .menuBtn {
        display: none;
    }
}

.navLinks {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
}

@media screen and (hover:hover) {

    .menuBtn:hover,
    .logo:hover,
    .cartBtn:hover {
        cursor: pointer;
    }

    .cartBtn:hover {
        filter: invert(46%) sepia(96%) saturate(312%) hue-rotate(338deg) brightness(99%) contrast(92%);
    }
}

@media screen and (max-width:1200px) {
    .navLinks {
        position: static;
        transform: none;

        :deep(li) {
            margin-left: 24px;
        }

        :deep(li):nth-child(1) {
            margin-left: 0;
        }
    }
}

@media screen and (max-width:1024px) {
    nav {
        margin: 0 40px;

        .menuBtn {
            display: block;
            position: absolute;
            left: 0;
        }

        .logo {
            margin-left: 42px;
        }
    }

    .navLinks {
        display: none;
    }
}

@media screen and (max-width:500px) {
    nav {
        margin: 0 24px;

        .menuBtn {
            position: static;
        }

        .logo {
            margin-left: 0;
        }
    }
}
</style>