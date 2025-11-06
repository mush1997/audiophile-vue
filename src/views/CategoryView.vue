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

// if (productData.value.length === 0) { getProductsData() }
if (productData.value.length === 0) { setTimeout(() => getProductsData(), 1200) }
</script>

<template>
    <div class="transitionWrapper">
        <HeaderSection>
            <Transition name="fade" appear>
                <div class="categoryTitle" v-if="products.length !== 0">
                    <h1>{{ currentCategory }}</h1>
                </div>
            </Transition>
        </HeaderSection>

        <main>
            <Transition name="fade" mode="out-in" appear>
                <LoadingBar v-if="!finished" key="loading" />
                <NoDataText v-else-if="products.length === 0" key="noData">
                    <template v-slot:firstLine>
                        <p>Oops! The category you required is not found.</p>
                    </template>
                    <template v-slot:secondLine>
                        <p>Please check the categories below!</p>
                    </template>
                </NoDataText>
                <ProductList v-else :products key="productList" />
            </Transition>
        </main>
    </div>
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
    min-height: 120px;
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