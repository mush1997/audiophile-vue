<script setup>
import { useAssets } from '@/composables/useAssets'

const categories = [
    {
        name: "Headphones",
        img: "/assets/shared/desktop/image-category-thumbnail-headphones.png"
    },
    {
        name: "Speakers",
        img: "/assets/shared/desktop/image-category-thumbnail-speakers.png"
    },
    {
        name: "Earphones",
        img: "/assets/shared/desktop/image-category-thumbnail-earphones.png"
    }
]
</script>

<template>
    <section class="menuComponent">
        <div class="wrapper" v-for="category in categories" :key="category.name"
            @click="$router.push({ path: `/category/${category.name.toLowerCase()}` }).catch(error => error)">
            <img :src="useAssets(`/src${category.img}`)" :alt="category.name">
            <div>
                <p>{{ category.name }}</p>
                <p><span>Shop</span><img src="@/assets/shared/desktop/icon-arrow-right.svg" alt=""></p>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.menuComponent {
    margin: 160px 0;
    padding: 0 11%;
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 30px;
}

.wrapper {
    flex-basis: 33%;
    padding-bottom: 60px;
    text-align: center;
    position: relative;

    &::after {
        content: "";
        width: 100%;
        height: 72%;
        border-radius: 10px;
        background-color: $block_bg;
        display: block;
        position: absolute;
        bottom: 0;
        z-index: -1;
    }

    &>img {
        width: 70%;
    }

    div {
        padding: 60px 6px 30px 6px;
        width: 100%;
        position: absolute;
        bottom: 0;

        p:nth-child(1) {
            margin-bottom: 16px;
            font-size: 18px;
            font-weight: bold;
            line-height: 24px;
            letter-spacing: 1.3px;
            text-transform: uppercase;
        }

        p:nth-child(2) {
            display: flex;
            justify-content: center;
            align-items: center;

            span {
                font-size: 13px;
                font-weight: bold;
                color: $dark_gray;
                letter-spacing: 1px;
                text-transform: uppercase;
            }

            img {
                margin-left: 14px;
            }
        }
    }
}

.wrapper:last-child {
    &>img {
        position: relative;
        top: 16px;
    }
}

@media screen and (hover:hover) {
    .wrapper:hover {
        cursor: pointer;

        div p:nth-child(2) span {
            color: $primary;
        }
    }
}

@media screen and (min-width:1700px) {
    .menuComponent {
        gap: 60px;
    }
}

@media screen and (max-width:1200px) {
    .wrapper div {
        padding-bottom: 20px;
    }
}

@media screen and (max-width:1024px) {
    .menuComponent {
        margin: 120px 0;
        padding: 0 40px;
    }

    .wrapper {
        &>img {
            width: 60%;
            min-width: 130px;
        }

        div {
            p:nth-child(1) {
                font-size: 14px;
                letter-spacing: 1.1px;
            }
        }
    }

    .wrapper:last-child {
        &>img {
            width: 65%;
            top: 0;
        }
    }
}

@media screen and (max-width:820px) {
    .menuComponent {
        gap: 20px;
    }

    .wrapper {
        padding-bottom: 70px;
    }
}


@media screen and (max-width:500px) {
    .menuComponent {
        padding: 0 24px;
        flex-wrap: wrap;
        justify-content: flex-start;
        gap: 16px;
    }

    .wrapper {
        flex-basis: 100%;

        &::after {
            height: 80%;
        }

        &>img {
            width: 40%;
            min-width: 100px;
        }

        div {
            p:nth-child(1) {
                font-size: 15px;
            }
        }
    }

    .wrapper:last-child {
        &>img {
            width: 45%;
        }
    }
}
</style>