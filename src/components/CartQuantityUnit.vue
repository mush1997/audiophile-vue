<script setup>
import { useCartStore } from '@/stores/cart'
import { useShadowStore } from '@/stores/shadow'
import { storeToRefs } from 'pinia'

const { item } = defineProps(['item'])
const emit = defineEmits(['showDialogBox'])

const cartStore = useCartStore()
const { hideCart, emptyCart } = storeToRefs(cartStore)
const { plusItem, minusItem, removeItem } = cartStore

const shadowStore = useShadowStore()
const { cartShadow } = storeToRefs(shadowStore)
const { hideShadow } = shadowStore

function plusInCart(itemName, itemAmount) {
    plusItem(itemName, itemAmount)
}

function minusInCart(itemName, itemAmount) {
    itemAmount === 1 ? removeItem(itemName) : minusItem(itemName, itemAmount)

    if (emptyCart.value) {
        hideShadow(hideCart, cartShadow)
        emit('showDialogBox', 'Your cart is empty now.')
    }
}
</script>

<template>
    <p class="cartQuantity">
        <span class="minus" @click="minusInCart(item.name, item.amount)">-</span>
        <span>{{ item.amount }}</span>
        <span class="plus" @click="plusInCart(item.name, item.amount)">+</span>
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