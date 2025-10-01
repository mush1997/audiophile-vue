<script setup>
import { useCartStore } from '@/stores/cart'
import { storeToRefs } from 'pinia'

const { item } = defineProps(['item'])
const emit = defineEmits(['showDialogBox'])
const { cartList } = storeToRefs(useCartStore())

function plusInCart() {
    cartList.value.find(item => item["name"] === item.value.name)["amount"] = item.value.amount + 1;
}

function minusInCart() {
    if (item.value.amount === 1) {
        const index = cartList.value.findIndex(item => item["name"] === item.value.name);
        cartList.value.splice(index, 1);
    } else {
        cartList.value.find(item => item["name"] === item.value.name)["amount"] = item.value.amount - 1;
    }

    if (cartList.value.length === 0) { emit('showDialogBox', 'Your cart will be empty.') }
}
</script>

<template>
    <p class="cartQuantity">
        <span class="minus" @click="plusInCart">-</span>
        <span>{{ item.amount }}</span>
        <span class="plus" @click="minusInCart">+</span>
    </p>
</template>

<style lang="scss" scoped>
.cartQuantity {
    margin-left: 24px;
    padding: 16px;
    width: 100px;
    height: 40px;
    background-color: $block_bg;
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
        font-size: 14px;
        font-weight: bold;
    }
}

@media screen and (max-width:500px) {
    .cartQuantity {
        margin-left: 16px;
        padding: 10px;
        width: 72px;
        height: 28px;

        span {
            font-size: 12px;
        }

        .minus,
        .plus {
            font-size: 16px;
        }
    }
}
</style>