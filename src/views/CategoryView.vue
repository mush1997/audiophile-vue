<script setup>
import HeaderSection from '@/components/HeaderSection.vue'
import LoadingBar from '@/components/LoadingBar.vue'
import ProductList from '@/components/ProductList.vue'

import { useDataStore } from '@/stores/data'
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'
import { defineAsyncComponent, computed } from 'vue'

const NoDataText = defineAsyncComponent(() => import('@/components/NoDataText.vue'))

const dataStore = useDataStore()
const { productData, finished } = storeToRefs(dataStore)
const { getProductsData } = dataStore
const route = useRoute()
const currentCategory = computed(() => route.params.categoryName)
const products = computed(() => productData.value.length === 0 ? [] : productData.value.filter(data => data.category === currentCategory.value).reverse())

if (productData.value.length === 0) { getProductsData() }
// if (productData.value.length === 0) { setTimeout(() => getProductsData(), 2000) }
</script>

<template>
    <HeaderSection>
        <div class="categoryTitle" v-show="products.length !== 0">
            <h1>{{ currentCategory }}</h1>
        </div>
    </HeaderSection>

    <main>
        <LoadingBar v-if="!finished" />
        <NoDataText v-else-if="products.length === 0">
            <template v-slot:firstLine>
                <p>Oops! The category you required is not found.</p>
            </template>
            <template v-slot:secondLine>
                <p>Please check the categories below!</p>
            </template>
        </NoDataText>
        <ProductList v-else :products />
    </main>
</template>

<style lang="scss" scoped>
.categoryTitle {
    width: 100%;
    height: 240px;
    text-align: center;

    h1 {
        font-size: 40px;
        line-height: 240px;
        color: $white;
        letter-spacing: 1.5px;
    }
}

main {
    padding-top: 160px;
}

@media screen and (max-width:1024px) {
    main {
        padding-top: 120px;
    }
}

@media screen and (max-width:500px) {
    .categoryTitle {
        height: 100px;

        h1 {
            font-size: 28px;
            line-height: 100px;
        }
    }

    main {
        padding-top: 64px;
    }
}
</style>