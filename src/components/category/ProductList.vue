<script setup>
import ProductListItem from '@/components/category/ProductListItem.vue'
import { ref, computed, onMounted } from 'vue'

const { products } = defineProps(['currentCategory', 'products'])
const emit = defineEmits(['productListDone'])

const sortByDefault = ref(true)
const sortedProducts = computed(() => sortByDefault.value ? products.toReversed() : products)

function changeSorting(event) {
    if (event.target.classList.contains('active')) { return }
    sortByDefault.value = !sortByDefault.value
}

onMounted(() => {
    emit('productListDone')
})
</script>

<template>
    <div class="transitionWrapper">
        <div class="categoryTitle">
            <h1>{{ currentCategory }}</h1>
        </div>
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
.categoryTitle {
    width: 100%;
    height: 240px;
    background-color: $black;
    text-align: center;
    position: absolute;
    top: 92px;
    left: 0;

    h1 {
        font-size: 40px;
        line-height: 240px;
        color: $white;
        letter-spacing: 1.5px;
    }
}

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
    .categoryTitle {
        height: 180px;

        h1 {
            font-size: 36px;
            line-height: 180px;
        }
    }

    .sorting {
        margin-bottom: 24px;
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
}
</style>