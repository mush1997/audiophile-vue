<script setup>
import LoadingBar from '@/components/shared/LoadingBar.vue'
import ProductList from '@/components/category/ProductList.vue'

import { useDataStore } from '@/stores/data'
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'
import { defineAsyncComponent, computed, ref, watch, onWatcherCleanup, nextTick } from 'vue'

const NoDataText = defineAsyncComponent(() => import('@/components/shared/NoDataText.vue'))

const dataStore = useDataStore()
const { productData, finished } = storeToRefs(dataStore)
const { getProductsData } = dataStore
const route = useRoute()
const currentCategory = computed(() => route.params.categoryName?.toLowerCase() || '')
const products = computed(() => productData.value.length === 0 ? [] : productData.value.filter(data => data.category === currentCategory.value))
const title = computed(() => products.value.length === 0 ? 'Audiophile' : `${currentCategory.value[0].toUpperCase()}` + `${currentCategory.value.slice(1)}` + ' | Audiophile')
const showCategoryTitle = ref(false)

// if (productData.value.length === 0) { getProductsData() }
if (productData.value.length === 0) { setTimeout(() => getProductsData(), 500) }

watch(title, (newTitle) => {
    let timerID

    onWatcherCleanup(() => {
        clearTimeout(timerID)
    })

    nextTick(() => {
        timerID = setTimeout(() => { document.title = newTitle }, 50)
    })
}, { immediate: true })
</script>

<template>
    <div class="wrapper" :class="{ 'titleBg': showCategoryTitle }">
        <main :class="{ 'extraPadding': showCategoryTitle }">
            <Transition name="fade" mode="out-in" appear>
                <LoadingBar v-if="!finished" />
                <NoDataText v-else-if="products.length === 0">
                    <template v-slot:firstLine>
                        <p>Oops! The category you required is not found.</p>
                    </template>
                    <template v-slot:secondLine>
                        <p>Please check the categories below!</p>
                    </template>
                </NoDataText>
                <ProductList v-else @productListDone="showCategoryTitle = !showCategoryTitle" :currentCategory
                    :products />
            </Transition>
        </main>
    </div>
</template>

<style lang="scss" scoped>
.wrapper.titleBg::before {
    content: "";
    width: 100%;
    height: 240px;
    background-color: $black;
    position: absolute;
    top: 92px;
    left: 0;
}

main {
    padding-top: 160px;
    min-height: 280px;
}

.extraPadding {
    padding-top: calc(160px + 240px);
}

@media screen and (max-width:1024px) {
    .wrapper.titleBg::before {
        height: 180px;
    }

    main {
        padding-top: 120px;
        min-height: 240px;
    }

    .extraPadding {
        padding-top: calc(120px + 180px);
    }
}

@media screen and (max-width:500px) {
    .wrapper.titleBg::before {
        height: 100px;
    }

    main {
        margin-bottom: -60px;
        padding-top: 64px;
        min-height: 214px;
    }

    .extraPadding {
        padding-top: calc(64px + 100px);
    }
}
</style>