<script setup>
import HeaderSection from '@/components/HeaderSection.vue'
import MenuList from '@/components/MenuList.vue'
import ProductIntroduction from '@/components/ProductIntroduction.vue'
import RecommendedProucts from '@/components/RecommendedProucts.vue'
import AsideSection from '@/components/AsideSection.vue'
import FooterSection from '@/components/FooterSection.vue'

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

    <MenuList class="menu hide" />

    <main>
        <ProductIntroduction :product :finished />
    </main>

    <RecommendedProucts :otherItems="product.others" :finished />

    <MenuList />
    <AsideSection />
    <FooterSection />
</template>

<style lang="scss" scoped></style>
