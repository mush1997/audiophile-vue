<script setup>
import MainButton from '@/components/MainButton.vue'
import { useAssets } from '@/composables/useAssets'
import { useSizeStore } from '@/stores/size'
import { storeToRefs } from 'pinia'
import { ref, computed } from 'vue'

const { products } = defineProps(['products'])
const { picSize } = storeToRefs(useSizeStore())
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
        <section class="product" v-for="product in sortedProducts" :key="product.id">
            <img :src="useAssets(`/src${product.categoryImage[picSize]}`)" :alt="product.name">
            <div>
                <p class="specialTitle" v-if="product.new">New product</p>
                <h2>{{ product.name }}</h2>
                <p>{{ product.description }}</p>
                <MainButton @click="$router.push({ path: `/product/${product.slug}` }).catch(error => error)">See
                    product</MainButton>
            </div>
        </section>
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

.product {
    margin-bottom: 160px;
    min-height: 400px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
        flex-shrink: 0;
        width: 48%;
        border-radius: 10px;
    }

    div {
        padding-left: 125px;

        .specialTitle {
            margin-top: 0;
            margin-bottom: 16px;
            opacity: 1;
        }

        h2 {
            font-size: 40px;
            line-height: 44px;
            letter-spacing: 1.5px;
        }

        p {
            margin-top: 32px;
            opacity: 0.5;
        }
    }
}

.product:nth-of-type(even) {
    img {
        order: 1;
    }

    div {
        padding-left: 0;
        padding-right: 125px;
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

@media screen and (min-width:1200px) {
    .product img {
        max-width: 640px;
    }
}

@media screen and (max-width:1024px) {
    .sorting {
        margin-bottom: 24px;
    }

    .product {
        margin-bottom: 120px;
        display: block;
        text-align: center;

        img {
            width: 100%;
        }

        div {
            margin-top: 52px;
            padding: 0 5%;
            width: 100%;

            button {
                margin-top: 24px;
            }
        }
    }

    .product:nth-of-type(even) {
        div {
            padding: 0 5%;
        }
    }
}

@media screen and (max-width:500px) {
    .product {
        div {
            margin-top: 32px;
            padding: 0;

            .specialTitle {
                margin-bottom: 24px;
            }

            h2 {
                font-size: 28px;
                line-height: 38px;
                letter-spacing: 2px;
            }

            p {
                margin-top: 24px;
            }
        }
    }

    .product:nth-of-type(even) {
        div {
            padding: 0;
        }
    }
}
</style>