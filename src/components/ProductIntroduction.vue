<script setup>
import ProductOverview from '@/components/ProductOverview.vue'
import ProductDetails from '@/components/ProductDetails.vue'
import ProductPics from '@/components/ProductPics.vue'

import { useSizeStore } from '@/stores/size'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'

const { product } = defineProps(['product'])
const emit = defineEmits(['showRecommended'])
const { picSize } = storeToRefs(useSizeStore())

onMounted(() => {
    emit('showRecommended')
})
</script>

<template>
    <div class="transitionWrapper">
        <p class="goBack" @click="$router.go(-1)">Go Back</p>
        <ProductOverview :product :picSize />
        <ProductDetails :product />
        <ProductPics :pics="product.gallery" :picSize />
    </div>
</template>

<style lang="scss" scoped>
.transitionWrapper {
    margin-top: -160px;
}

@media screen and (max-width:1024px) {
    .transitionWrapper {
        margin-top: -120px;
    }
}

@media screen and (max-width:500px) {
    .transitionWrapper {
        margin-top: -90px;
    }
}
</style>