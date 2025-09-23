<script setup>
import HeaderSection from '@/components/HeaderSection.vue'
import MenuList from '@/components/MenuList.vue'
import ProductIntroduction from '@/components/ProductIntroduction.vue'
import RecommendedProucts from '@/components/RecommendedProucts.vue'

import { useDataStore } from '@/stores/data'
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const dataStore = useDataStore()
const { productData, finished } = storeToRefs(dataStore)
const { getProductsData } = dataStore
const route = useRoute()
const currentProduct = route.params.productName
const product = computed(() => productData.value.length === 0 ? [] : productData.value.find(data => data.slug === currentProduct))

// getProductsData()
setTimeout(() => getProductsData(), 3000)

// if (!product) {
//     MenuList.style.marginTop = "0";
// }
</script>

<template>
    <HeaderSection />

    <main>
        <ProductIntroduction :product :finished />
    </main>

    <RecommendedProucts :otherItems="product.others" :finished />

    <MenuList />
</template>

<style lang="scss" scoped>
main :deep(section) {
    margin-bottom: 160px;
}

@media screen and (max-width:1024px) {
    main :deep(section) {
        margin-bottom: 120px;
    }
}

@media screen and (max-width:500px) {
    main :deep(section) {
        margin-bottom: 90px;
    }
}
</style>
