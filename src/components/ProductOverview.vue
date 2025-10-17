<script setup>
import AddToCartUnit from '@/components/AddToCartUnit.vue'
import { useAssets } from '@/composables/useAssets'

const { product, picSize } = defineProps(['product', 'picSize'])
</script>

<template>
    <section class="overview">
        <p>
            <img :src="useAssets(`/src${product.image[picSize]}`)" :alt="product.name">
        </p>
        <div>
            <p class="specialTitle" v-if="product.new">New product</p>
            <h1>{{ product.name }}</h1>
            <p class="description">{{ product.description }}</p>
            <p class="price">{{ product.price.toLocaleString() }}</p>
            <AddToCartUnit :product />
        </div>
    </section>
</template>

<style lang="scss" scoped>
.overview {
    display: flex;
    align-items: center;

    &>p {
        flex-basis: 48%;

        img {
            border-radius: 10px;
            width: 100%;
            display: block;
        }
    }

    &>div {
        flex-basis: 52%;
        padding-left: 125px;

        .specialTitle {
            margin-bottom: 16px;
        }

        h1 {
            font-size: 40px;
            line-height: 44px;
            letter-spacing: 1.5px;
        }

        .description {
            margin: 32px 0;
            opacity: 0.5;
        }

        .price {
            font-size: 18px;
            font-weight: bold;
            letter-spacing: 1.3px;
        }
    }
}

@media screen and (min-width:1700px) {
    .overview {
        &>p img {
            max-width: 640px;
        }

        &>div {
            padding-left: 90px;
        }
    }
}

@media screen and (max-width:1024px) {
    .overview {
        &>p {
            flex-basis: 50%;
            padding-right: 10%;
        }

        &>div {
            flex-basis: 50%;
            padding-left: 0;

            .specialTitle {
                font-size: 12px;
            }

            h1 {
                font-size: 28px;
                line-height: 32px;
                letter-spacing: 1px;
            }
        }
    }
}

@media screen and (max-width:700px) {
    .overview {
        &>p {
            flex-basis: 45%;
            padding-right: 24px;
        }

        &>div {
            flex-basis: 55%;

            .specialTitle {
                margin-bottom: 10px;
            }

            h1 {
                font-size: 24px;
            }

            .description {
                margin: 16px 0;
                font-size: 14px;
                line-height: 22px;
            }
        }
    }
}

@media screen and (max-width:500px) {
    .overview {
        flex-wrap: wrap;
        align-items: flex-start;

        &>p {
            flex-basis: 100%;
            margin-bottom: 32px;
            padding-right: 0;
        }

        &>div {
            flex-basis: auto;

            .specialTitle {
                margin-bottom: 24px;
                font-size: 14px;
            }

            h1 {
                font-size: 28px;
            }

            .description {
                margin: 24px 0;
                font-size: 15px;
                line-height: 25px;
            }
        }
    }
}
</style>