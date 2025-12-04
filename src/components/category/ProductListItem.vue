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
        <div class="productPic">
            <img :src="useAssets(`/src${product.categoryImage[picSize]}`)" :alt="product.name">
        </div>
        <div class="productInfo">
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
}

.productInfo {
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

.product:nth-of-type(even) {
    .productPic {
        order: 1;
    }

    .productInfo {
        padding-left: 0;
        padding-right: 125px;
    }
}

@media screen and (min-width:1200px) {
    .productPic {
        max-width: 640px;
    }
}

@media screen and (max-width:1024px) {
    .product {
        margin-bottom: 120px;
        display: block;
        text-align: center;
    }

    .productPic {
        width: 100%;
        aspect-ratio: 689/352;
    }

    .productInfo {
        margin-top: 52px;
        padding: 0 5%;
        width: 100%;
        display: block;

        h2 {
            font-size: 36px;
        }

        button {
            margin-top: 24px;
        }
    }

    .product:nth-of-type(even) {
        .productInfo {
            padding: 0 5%;
        }
    }
}

@media screen and (max-width:500px) {
    .productPic {
        aspect-ratio: 327/352;
    }

    .productInfo {
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

    .product:nth-of-type(even) {
        .productInfo {
            padding: 0;
        }
    }
}
</style>