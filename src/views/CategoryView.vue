<script setup>
import HeaderSection from '@/components/layout/HeaderSection.vue'
// import LoadingBar from '@/components/shared/LoadingBar.vue'
import ProductList from '@/components/category/ProductList.vue'

import { useDataStore } from '@/stores/data'
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'
// import { defineAsyncComponent, computed } from 'vue'
import { computed } from 'vue'

// const NoDataText = defineAsyncComponent(() => import('@/components/shared/NoDataText.vue'))

const dataStore = useDataStore()
// const { productData, finished } = storeToRefs(dataStore)
const { productData } = storeToRefs(dataStore)
const { getProductsData } = dataStore
const route = useRoute()
const currentCategory = computed(() => route.params.categoryName.toLowerCase())
const products = computed(() => productData.value.length === 0 ? [] : productData.value.filter(data => data.category === currentCategory.value))

if (productData.value.length === 0) { getProductsData() }
// if (productData.value.length === 0) { setTimeout(() => getProductsData(), 500) }
</script>

<template>
    <div class="transitionWrapper">
        <HeaderSection>
            <Transition name="zoom-in" appear>
                <div class="categoryTitle" v-if="products.length !== 0">
                    <h1>{{ currentCategory }}</h1>
                </div>
            </Transition>
        </HeaderSection>

        <main>
            <!-- <Transition name="fade" mode="out-in" appear>
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
</Transition> -->

            <ProductList :products />
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
        color: red;
        letter-spacing: 1.5px;
    }
}

main {
    padding-top: 160px;
    min-height: 280px;
}

.zoom-in-enter-from,
.zoom-in-leave-to {
    opacity: 0;
    transform: scale(0);
}

.zoom-in-enter-active,
.zoom-in-leave-active {
    transition: all 0.4s ease-out;
}

@media screen and (max-width:1024px) {
    .categoryTitle {
        height: 180px;

        h1 {
            font-size: 36px;
            line-height: 180px;
        }
    }

    main {
        padding-top: 120px;
        min-height: 240px;
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
        margin-bottom: -60px;
        padding-top: 64px;
        min-height: 214px;
    }
}
</style>