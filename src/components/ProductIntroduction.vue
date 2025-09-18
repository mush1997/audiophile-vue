<script setup>
import LoadingBar from '@/components/LoadingBar.vue'
import ProductOverview from '@/components/ProductOverview.vue'
import ProductDetails from '@/components/ProductDetails.vue'
import ProductPics from '@/components/ProductPics.vue'

import { usePicSize } from '@/composables/usePicSize'

const { product, finished } = defineProps(['product', 'finished'])
const { picSize, updatePicSize } = usePicSize()

updatePicSize()
</script>

<template>
    <LoadingBar v-if="!finished" />
    <template v-else>
        <p class="goBack" @click="$router.go(-1)">Go Back</p>
        <ProductOverview :product :picSize />
        <ProductDetails :product />
        <ProductPics :pics="product.gallery" :picSize />
    </template>
</template>

<style lang="scss" scoped>
.loading {
    margin-top: 160px;
}

section {
    margin-bottom: 160px;
}

@media screen and (max-width:1024px) {
    .loading {
        margin-top: 120px;
    }

    section {
        margin-bottom: 120px;
    }
}

@media screen and (max-width:500px) {
    .loading {
        margin-top: 90px;
    }

    section {
        margin-bottom: 90px;
    }
}
</style>