<script setup>
import NavLinks from '@/components/NavLinks.vue'
import { useEventListener } from '@vueuse/core'

useEventListener(window, "click", showHideMenu)
useEventListener(window, "resize", showHideMenuBtn)
showHideMenuBtn()

function showHideMenu() {
    menu.classList.remove("hide");
    document.body.classList.add("menuShadow");
    document.addEventListener("keydown", prohibitTab);

    document.querySelector(".shadow").addEventListener("click", () => {
        menu.classList.add("hide");
        document.body.classList.remove("menuShadow");
        document.removeEventListener("keydown", prohibitTab);
    }, { once: true });
}

function showHideMenuBtn() {
    if (window.innerWidth > 1024) {
        menuBtn.classList.add("hide");
        menu.classList.add("hide");
        document.body.classList.remove("menuShadow");
    } else {
        menuBtn.classList.remove("hide");
    }
}
</script>

<template>
    <nav>
        <img class="menuBtn hide" src="@/assets/shared/tablet/icon-hamburger.svg" alt="menu" @click="showHideMenu">
        <img src="@/assets/shared/desktop/logo.svg" alt="logo" class="logo"
            @click="$router.push({ path: '/' }).catch(error => error)">
        <NavLinks />
        <img class="cartBtn" src="@/assets/shared/desktop/icon-cart.svg" alt="cart">
    </nav>
</template>

<style lang="scss" scoped>
.hide {
    display: none;
}

nav {
    margin: 0 11%;
    padding: 32px 0;
    height: 92px;
    border-bottom: 1px solid $dark_gray;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    .navLinks {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }
}

@media screen and (hover:hover) {
    nav .cartBtn:hover {
        cursor: pointer;
        filter: invert(46%) sepia(96%) saturate(312%) hue-rotate(338deg) brightness(99%) contrast(92%);
    }
}

@media screen and (max-width:1200px) {
    nav {
        .navLinks {
            position: static;
            transform: none;

            li {
                margin-left: 24px;
            }
        }
    }
}

@media screen and (max-width:1024px) {
    nav {
        margin: 0 40px;

        .menuBtn {
            position: absolute;
            left: 0;
        }

        .logo {
            margin-left: 42px;
        }

        .navLinks {
            display: none;
        }
    }
}

@media screen and (max-width:1024px) and (hover:hover) {
    nav .menuBtn:hover {
        cursor: pointer;
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