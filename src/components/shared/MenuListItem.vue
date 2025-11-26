<script setup>
import { useAssets } from '@/composables/useAssets'

const { categories } = defineProps(['categories'])
</script>

<template>
    <div class="listItem" v-for="category in categories" :key="category.name"
        @click="$router.push({ path: `/category/${category.name.toLowerCase()}` }).catch(error => error)">
        <img :src="useAssets(`/src${category.img}`)" :alt="category.name">
        <div>
            <p>{{ category.name }}</p>
            <p><span>Shop</span><img src="@/assets/shared/desktop/icon-arrow-right.svg" alt=""></p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.listItem {
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
                transition: all 0.3s ease-out;
            }

            img {
                margin-left: 14px;
            }
        }
    }
}

.listItem:last-child {
    &>img {
        position: relative;
        top: 16px;
    }
}

@media screen and (hover:hover) {
    .listItem:hover {
        cursor: pointer;

        div p:nth-child(2) span {
            font-size: 15px;
            letter-spacing: 3px;
            color: $primary;
        }
    }
}

@media screen and (max-width:1200px) {
    .listItem div {
        padding-bottom: 20px;
    }
}

@media screen and (max-width:1024px) {
    .listItem {
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

    .listItem:last-child {
        &>img {
            width: 65%;
            top: 0;
        }
    }
}

@media screen and (max-width:820px) {
    .listItem {
        padding-bottom: 70px;
    }
}


@media screen and (max-width:500px) {
    .listItem {
        flex-basis: 100%;

        &::after {
            height: 80%;
        }

        &>img {
            width: 40%;
            min-width: 100px;
        }
    }

    .listItem:last-child {
        &>img {
            width: 45%;
        }
    }
}
</style>