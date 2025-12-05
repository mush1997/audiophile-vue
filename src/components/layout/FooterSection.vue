<script setup>
import NavLinks from '@/components/layout/NavLinks.vue'
import FooterContent from '@/components/layout/FooterContent.vue'
</script>

<template>
    <footer>
        <nav>
            <img class="logo" src="@/assets/shared/desktop/logo.svg" alt="logo">
            <NavLinks />
        </nav>
        <FooterContent />
        <p class="attribution">
            Challenge by <a href="https://www.frontendmentor.io" target="_blank" tabindex="-1">Frontend Mentor</a>.
            Coded by Tina.
        </p>
    </footer>
</template>

<style lang="scss" scoped>
footer {
    padding: 75px 11% 0 11%;
    width: 100%;
    min-height: 365px;
    background-color: $footer_bg;
    position: relative;

    &::before {
        content: "";
        width: 100px;
        height: 4px;
        background-color: $primary;
        position: absolute;
        left: 11%;
        top: 0;
    }
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.attribution {
    padding: 16px 20px 24px 20px;
    width: 100%;
    font-size: 12px;
    line-height: 15px;
    color: $dark_gray;
    text-align: center;

    a {
        font-size: 12px;
        color: $dark_gray;
    }
}

@media screen and (max-width:1024px) {
    footer {
        padding: 60px 40px 0 40px;

        &::before {
            left: 40px;
        }
    }

    nav {
        display: block;

        .logo {
            margin-bottom: 32px;
        }

        .navLinks {
            :deep(li) {
                margin-left: 24px;
            }

            :deep(li):nth-child(1) {
                margin-left: 0;
            }
        }
    }
}

@media screen and (max-width:500px) {
    footer {
        padding: 52px 24px 0 24px;

        &::before {
            left: 50%;
            transform: translateX(-50%);
        }
    }

    nav {
        text-align: center;

        .logo {
            margin-bottom: 48px;
        }

        .navLinks {
            :deep(li) {
                margin: 16px auto 0 auto;
                width: fit-content;
                display: block;
            }

            :deep(li):nth-child(1) {
                margin: 0 auto;
            }
        }
    }

    .attribution {
        padding: 16px 36px 24px 36px;
    }
}
</style>