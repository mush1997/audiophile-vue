<script setup>
import AddToCartUnit from '@/components/shared/AddToCartUnit.vue'
import { useAssets } from '@/composables/useAssets'

const { product, picSize } = defineProps(['product', 'picSize'])
</script>

<template>
    <section class="overview">
        <div class="productPic">
            <img :src="useAssets(`/src${product.image[picSize]}`)" :alt="product.name">
        </div>
        <div class="productInfo">
            <p class="specialTitle" v-if="product.new">New product</p>
            <h1>{{ product.name }}</h1>
            <p class="description">{{ product.description }}</p>
            <p class="price">$ {{ product.price.toLocaleString() }}</p>
            <AddToCartUnit :product />
        </div>
    </section>
</template>

<style lang="scss" scoped>
.overview {
    display: flex;
}

.productInfo {
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

@media screen and (min-width:1700px) {
    .productPic {
        max-width: 640px;
    }

    .productInfo {
        padding-left: 90px;
    }
}

@media screen and (max-width:1024px) {
    .productPic {
        flex-basis: 50%;
        padding-right: 10%;
        max-height: 650px;
        aspect-ratio: 281/480;
    }

    .productInfo {
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

@media screen and (max-width:700px) {
    .productPic {
        flex-basis: 45%;
        padding-right: 24px;
    }

    .productInfo {
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

@media screen and (max-width:500px) {
    .overview {
        display: block;
    }

    .productPic {
        margin-bottom: 32px;
        padding-right: 0;
        aspect-ratio: 1/1;
    }

    .productInfo {
        display: block;

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
</style>