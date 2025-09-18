<script setup>
import NavLinks from '@/components/NavLinks.vue'
</script>

<template>
    <footer>
        <nav>
            <img class="logo" src="@/assets/shared/desktop/logo.svg" alt="logo">
            <NavLinks />
        </nav>
        <section>
            <div class="text">
                <p>
                    Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers
                    and sound specialists who are devoted to helping you get the most out of personal audio. Come and
                    visit our demo facility - we’re open 7 days a week.
                </p>
                <p class="copyright">Copyright 2025. All Rights Reserved</p>
            </div>
            <div class="sns">
                <img src="@/assets/shared/desktop/icon-facebook.svg" alt="facebook">
                <img src="@/assets/shared/desktop/icon-twitter.svg" alt="twitter">
                <img src="@/assets/shared/desktop/icon-instagram.svg" alt="instagram">
            </div>
        </section>
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

    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    section {
        margin: 36px 0 32px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .text {
            flex-basis: 42%;

            p {
                color: $white;
                opacity: 0.5;
            }

            .copyright {
                margin-top: 56px;
                font-weight: bold;
            }
        }

        .sns {
            img {
                margin-left: 16px;
                vertical-align: middle;
            }

            img:nth-child(1) {
                margin-left: 0;
            }
        }
    }

    .attribution {
        padding: 0 6px 16px 6px;
        width: 100%;
        font-size: 12px;
        color: $dark_gray;
        text-align: center;

        a {
            font-size: 12px;
            color: $dark_gray;
        }
    }
}

@media screen and (hover:hover) {
    footer section .sns img:hover {
        cursor: pointer;
        filter: invert(46%) sepia(96%) saturate(312%) hue-rotate(338deg) brightness(99%) contrast(92%);
    }
}

@media screen and (max-width:1024px) {
    footer {
        padding: 60px 40px 0 40px;

        &::before {
            left: 40px;
        }

        nav {
            display: block;

            .logo {
                margin-bottom: 32px;
            }

            .navLinks {
                li {
                    margin-left: 24px;
                }
            }
        }

        section {
            display: block;
            position: relative;

            .text {
                .copyright {
                    margin-top: 80px;
                }
            }

            .sns {
                position: absolute;
                right: 0;
                bottom: 0;
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

        nav {
            text-align: center;

            .logo {
                margin-bottom: 48px;
            }

            .navLinks {
                li {
                    margin: 16px 0 0 0;
                    display: block;
                }

                li:nth-child(1) {
                    margin-top: 0;
                }
            }
        }

        section {
            text-align: center;

            .sns {
                margin-top: 48px;
                position: static;
            }
        }
    }
}
</style>