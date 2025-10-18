<script setup>
import { defineAsyncComponent } from 'vue'
import LoadingBar from '@/components/LoadingBar.vue'
import NoDataText from '@/components/NoDataText.vue'
import ProductIntroduction from '@/components/ProductIntroduction.vue'
const RecommendedProucts = defineAsyncComponent(() => import('@/components/RecommendedProucts.vue'))
// import RecommendedProucts from '@/components/RecommendedProucts.vue'

import { useDataStore } from '@/stores/data'
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const dataStore = useDataStore()
const { productData, finished } = storeToRefs(dataStore)
const { getProductsData } = dataStore
const route = useRoute()
const currentProduct = computed(() => route.params.productName)
const product = computed(() => productData.value.length === 0 ? [] : productData.value.find(data => data.slug === currentProduct.value))

if (productData.value.length === 0) { getProductsData() }
// if (productData.value.length === 0) { setTimeout(() => getProductsData(), 2000) }
</script>

<template>
    <main>
        <LoadingBar v-if="!finished" />
        <NoDataText v-else-if="!product">
            <template v-slot:firstLine>
                <p>Oops! The product you required is not found.</p>
            </template>
            <template v-slot:secondLine>
                <p>Please check our products in the categories below!</p>
            </template>
        </NoDataText>
        <ProductIntroduction v-else :product />
    </main>

    <RecommendedProucts v-if="finished && product" :otherItems="product ? product.others : []" />
</template>

<style lang="scss" scoped>
.loading,
.text {
    margin-top: 160px;
}

main :deep(section) {
    margin-bottom: 160px;
}

@media screen and (max-width:1024px) {

    .loading,
    .text {
        margin-top: 120px;
    }

    main :deep(section) {
        margin-bottom: 120px;
    }
}

@media screen and (max-width:500px) {

    .loading,
    .text {
        margin-top: 90px;
    }

    main :deep(section) {
        margin-bottom: 90px;
    }
}
</style>