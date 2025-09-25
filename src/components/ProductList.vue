<script setup>
import MainButton from '@/components/MainButton.vue'

import { usePicSize } from '@/composables/usePicSize'
import { useAssets } from '@/composables/useAssets'

const { products } = defineProps(['products'])
const { picSize, updatePicSize } = usePicSize()

updatePicSize()
</script>

<template>
    <section class="product" v-for="product in products" :key="product.id">
        <img :src="useAssets(`/src${product.categoryImage[picSize]}`)" :alt="product.name">
        <div>
            <p class="specialTitle" v-if="product.new">New product</p>
            <h2>{{ product.name }}</h2>
            <p>{{ product.description }}</p>
            <MainButton @click="$router.push({ path: `/product/${product.slug}` }).catch(error => error)">See
                product</MainButton>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.product {
    margin-bottom: 160px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
        flex-shrink: 0;
        border-radius: 10px;
        width: 48%;
    }

    div {
        padding-left: 125px;

        .specialTitle {
            margin-top: 0;
            margin-bottom: 16px;
            opacity: 1;
        }

        h2 {
            font-size: 40px;
            line-height: 44px;
            letter-spacing: 1.5px;
        }

        p {
            margin-top: 32px;
            opacity: 0.5;
        }
    }
}

.product:nth-child(even) {
    img {
        order: 1;
    }

    div {
        padding-left: 0;
        padding-right: 125px;
    }
}

@media screen and (min-width:1200px) {
    .product img {
        max-width: 640px;
    }
}

@media screen and (max-width:1024px) {
    .product {
        margin-bottom: 120px;
        display: block;
        text-align: center;

        img {
            width: 100%;
        }

        div {
            margin-top: 52px;
            padding: 0 5%;
            width: 100%;

            button {
                margin-top: 24px;
            }
        }
    }

    .product:nth-child(even) {
        div {
            padding: 0 5%;
        }
    }
}

@media screen and (max-width:500px) {
    .product {
        div {
            margin-top: 32px;
            padding: 0;

            .specialTitle {
                margin-bottom: 24px;
            }

            h2 {
                font-size: 28px;
                line-height: 38px;
                letter-spacing: 2px;
            }

            p {
                margin-top: 24px;
            }
        }
    }

    .product:nth-child(even) {
        div {
            padding: 0;
        }
    }
}
</style>