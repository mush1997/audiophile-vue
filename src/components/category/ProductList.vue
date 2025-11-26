<script setup>
import ProductListItem from '@/components/category/ProductListItem.vue'
import { ref, computed } from 'vue'

const { products } = defineProps(['products'])
const sortByDefault = ref(true)
const sortedProducts = computed(() => sortByDefault.value ? products.toReversed() : products)

function changeSorting(event) {
    if (event.target.classList.contains('active')) { return }
    sortByDefault.value = !sortByDefault.value
}
</script>

<template>
    <div class="transitionWrapper">
        <div class="sorting">
            <span>Sort by:</span>
            <div>
                <p><span :class="{ 'active': sortByDefault }" @click="changeSorting">Newest First</span></p>
                <p><span :class="{ 'active': !sortByDefault }" @click="changeSorting">Oldest First</span></p>
            </div>
        </div>
        <ProductListItem :sortedProducts />
    </div>
</template>

<style lang="scss" scoped>
.sorting {
    margin-bottom: 56px;
    display: flex;
    flex-wrap: wrap;

    &>span {
        margin-right: 4px;
        opacity: 0.5;
    }

    div p {
        display: inline-block;

        &:not(:first-child) {
            margin-left: 8px;

            &::before {
                content: "|";
                margin-right: 8px;
                opacity: 0.5;
            }
        }

        span {
            opacity: 0.5;
        }

        span.active {
            color: $primary;
            opacity: 1;
        }
    }
}

@media screen and (hover: hover) {
    .sorting div p span:hover {
        cursor: pointer;
        color: $primary;
        text-decoration: underline;
        opacity: 1;
    }
}

@media screen and (max-width:1024px) {
    .sorting {
        margin-bottom: 24px;
    }
}
</style>