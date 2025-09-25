<script setup>
import ProductOverview from '@/components/ProductOverview.vue'
import ProductDetails from '@/components/ProductDetails.vue'
import ProductPics from '@/components/ProductPics.vue'

import { usePicSize } from '@/composables/usePicSize'

const { product } = defineProps(['product'])
const { picSize, updatePicSize } = usePicSize()

updatePicSize()
</script>

<template>
    <p class="goBack" @click="$router.go(-1)">Go Back</p>
    <ProductOverview :product :picSize />
    <ProductDetails :product />
    <ProductPics :pics="product.gallery" :picSize />
</template>

<style lang="scss" scoped></style>