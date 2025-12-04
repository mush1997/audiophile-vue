<script setup>
import MainButton from '@/components/shared/MainButton.vue'
import { useAssets } from '@/composables/useAssets'
import { useSizeStore } from '@/stores/size'
import { storeToRefs } from 'pinia'

const { sortedProducts } = defineProps(['sortedProducts'])
const { picSize } = storeToRefs(useSizeStore())
</script>

<template>
    <section class="product" v-for="product in sortedProducts" :key="product.id">
        <div class="pic">
            <img :src="useAssets(`/src${product.categoryImage[picSize]}`)" :alt="product.name">
        </div>
        <div class="info">
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
    align-items: center;

    .pic {
        flex-basis: 48%;
        min-width: 0;
        min-height: 400px;

        img {
            width: 100%;
            border-radius: 10px;
            display: block;
        }
    }

    .info {
        flex-basis: 52%;
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

.product:nth-of-type(even) {
    .pic {
        order: 1;
    }

    .info {
        padding-left: 0;
        padding-right: 125px;
    }
}

@media screen and (min-width:1200px) {
    .product .pic {
        max-width: 640px;
    }
}

@media screen and (max-width:1024px) {
    .product {
        margin-bottom: 120px;
        display: block;
        text-align: center;

        .pic {
            width: 100%;
            min-height: auto;
        }

        .info {
            margin-top: 52px;
            padding: 0 5%;
            width: 100%;

            h2 {
                font-size: 36px;
            }

            button {
                margin-top: 24px;
            }
        }
    }

    .product:nth-of-type(even) {
        .info {
            padding: 0 5%;
        }
    }
}

@media screen and (max-width:500px) {
    .product {
        .info {
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

    .product:nth-of-type(even) {
        .info {
            padding: 0;
        }
    }
}
</style>