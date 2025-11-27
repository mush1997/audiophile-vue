<script setup>
import LoadingBar from '@/components/shared/LoadingBar.vue'
import ProductItem from '@/components/product/ProductItem.vue'

import { useDataStore } from '@/stores/data'
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'
import { defineAsyncComponent, computed, ref } from 'vue'

const NoDataText = defineAsyncComponent(() => import('@/components/shared/NoDataText.vue'))
const RecommendedList = defineAsyncComponent(() => import('@/components/product/RecommendedList.vue'))

const dataStore = useDataStore()
const { productData, finished } = storeToRefs(dataStore)
const { getProductsData } = dataStore
const route = useRoute()
const currentProduct = computed(() => route.params.productName.toLowerCase())
const product = computed(() => productData.value.length === 0 ? [] : productData.value.find(data => data.slug === currentProduct.value))
const renderRecommended = ref(false)

// if (productData.value.length === 0) { getProductsData() }
if (productData.value.length === 0) { setTimeout(() => getProductsData(), 500) }
</script>

<template>
    <div class="transitionWrapper">
        <main>
            <Transition name="fade" mode="out-in" appear>
                <LoadingBar v-if="!finished" />
                <NoDataText v-else-if="!product">
                    <template v-slot:firstLine>
                        <p>Oops! The product you required is not found.</p>
                    </template>
                    <template v-slot:secondLine>
                        <p>Please check our products in the categories below!</p>
                    </template>
                </NoDataText>
                <ProductItem v-else @showRecommended="renderRecommended = !renderRecommended" :product />
            </Transition>
        </main>

        <Transition name="fade" appear>
            <RecommendedList v-if="renderRecommended" :otherItems="product.others" />
        </Transition>
    </div>
</template>

<style lang="scss" scoped>
main {
    margin-top: 160px;
    min-height: 120px;
}

main :deep(section) {
    margin-bottom: 160px;
}

@media screen and (max-width:1024px) {
    main {
        margin-top: 120px;
    }

    main :deep(section) {
        margin-bottom: 120px;
    }
}

@media screen and (max-width:500px) {
    main {
        margin-top: 90px;
        margin-bottom: -60px;
        min-height: 150px;
    }

    main :deep(section) {
        margin-bottom: 90px;
    }
}
</style>