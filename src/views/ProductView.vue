<script setup>
import LoadingBar from '@/components/LoadingBar.vue'
import ProductIntroduction from '@/components/ProductIntroduction.vue'

import { useDataStore } from '@/stores/data'
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'
import { defineAsyncComponent, computed, ref } from 'vue'

const NoDataText = defineAsyncComponent(() => import('@/components/NoDataText.vue'))
const RecommendedProucts = defineAsyncComponent(() => import('@/components/RecommendedProucts.vue'))

const dataStore = useDataStore()
const { productData, finished } = storeToRefs(dataStore)
const { getProductsData } = dataStore
const route = useRoute()
const currentProduct = computed(() => route.params.productName)
const product = computed(() => productData.value.length === 0 ? [] : productData.value.find(data => data.slug === currentProduct.value))
const renderRecommended = ref(false)

// if (productData.value.length === 0) { getProductsData() }
if (productData.value.length === 0) { setTimeout(() => getProductsData(), 1200) }
</script>

<template>
    <div class="transitionWrapper">
        <main>
            <Transition name="fade" mode="out-in" appear>
                <LoadingBar v-if="!finished" key="loading" />
                <NoDataText v-else-if="!product" key="noData">
                    <template v-slot:firstLine>
                        <p>Oops! The product you required is not found.</p>
                    </template>
                    <template v-slot:secondLine>
                        <p>Please check our products in the categories below!</p>
                    </template>
                </NoDataText>
                <ProductIntroduction v-else @showRecommended="renderRecommended = !renderRecommended" :product
                    key="productIntro" />
            </Transition>
        </main>

        <Transition name="fade" appear>
            <RecommendedProucts v-if="renderRecommended" :otherItems="product.others" />
        </Transition>
    </div>
</template>

<style lang="scss" scoped>
.loading,
.text {
    margin-top: 160px;
}

main {
    min-height: 120px;
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