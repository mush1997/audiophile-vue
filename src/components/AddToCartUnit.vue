<script setup>
import MainButton from '@/components/MainButton.vue'

import { useCartStore } from '@/stores/cart'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

const { product } = defineProps(['product'])
const emit = defineEmits(['showDialogBox'])
const { cartList } = storeToRefs(useCartStore())
const quantity = ref(1)

function editQuantity(operator) {
    if (operator === "plus") {
        quantity.value++
    } else if (operator === "minus" && quantity.value !== 1) {
        quantity.value--
    }
}

function addToCart(product) {
    const item = { "name": product.name, "slug": product.slug, "price": product.price, "amount": quantity.value }
    const index = cartList.value.findIndex(items => items["name"] === item.name)
    index < 0 ? cartList.value.push(item) : cartList.value[index]["amount"] += quantity.value
    // window.localStorage.setItem("cartList", JSON.stringify(cartList.value))
    emit('showDialogBox', 'Added successfully!')
    quantity.value = 1
}
</script>

<template>
    <div class="addToCart">
        <p>
            <span class="minus" @click="editQuantity('minus')">-</span>
            <span>{{ quantity }}</span>
            <span class="plus" @click="editQuantity('plus')">+</span>
        </p>
        <MainButton @click="addToCart(product)">Add to cart</MainButton>
    </div>
</template>

<style lang="scss" scoped>
.addToCart {
    margin-top: 46px;
    display: flex;

    p {
        margin-right: 16px;
        padding: 16px;
        width: 120px;
        height: 48px;
        background-color: $block_bg;
        display: flex;
        justify-content: space-between;
        align-items: center;

        span {
            font-size: 14px;
            font-weight: bold;
        }
    }

    button {
        margin-top: 0;
    }
}

@media screen and (max-width:1024px) {
    .addToCart {
        margin-top: 30px;
    }
}

@media screen and (max-width:700px) {
    .addToCart {
        margin-top: 24px;

        p {
            margin-right: 10px;
            width: 100px;
            height: 40px;
        }

        button {
            width: 120px;
            height: 40px;
        }
    }
}

@media screen and (max-width:500px) {
    .addToCart {
        margin-top: 30px;

        p {
            margin-right: 16px;
        }
    }
}
</style>