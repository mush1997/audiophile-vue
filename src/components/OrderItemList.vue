<script setup>
import { useAssets } from '@/composables/useAssets'

const { cartList } = defineProps(['cartList'])
</script>

<template>
    <div class="item" :class="$attrs.class" v-for="item in cartList" :key="item.name">
        <div>
            <img :src="useAssets(`/src/assets/cart/image-${item.slug}.jpg`)" :alt="item.name">
            <div>
                <p>{{ item.name }}</p>
                <p>$ {{ item.price.toLocaleString() }}</p>
            </div>
        </div>
        <slot :item></slot>
    </div>
</template>

<style lang="scss" scoped>
.item {
    margin-top: 24px;
    width: 100%;
    display: flex;
    justify-content: space-between;

    &>div {
        width: 78%;
        display: flex;
        align-items: center;

        img {
            margin-right: 16px;
            width: 90px;
            border-radius: 10px;
        }

        div {
            p:nth-child(1) {
                font-weight: bold;
            }

            p:nth-child(2) {
                font-size: 14px;
                opacity: 0.5;
            }
        }
    }

    :slotted(.amount) {
        margin-left: 24px;
        font-weight: bold;
        opacity: 0.5;
    }
}

.item:first-child {
    margin-top: 0;
}

@media screen and (max-width:1200px) {
    .item {
        &>div img {
            width: 60px;
        }
    }
}

@media screen and (max-width:1024px) {
    .item {
        &>div {
            width: 70%;

            img {
                width: 70px;
            }
        }
    }
}

@media screen and (max-width:500px) {
    .item {
        &>div img {
            width: 50px;
        }

        :slotted(.amount) {
            margin-left: 16px;
        }
    }
}
</style>