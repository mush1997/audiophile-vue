<script setup>
import MainButton from '@/components/MainButton.vue'
import { useDialog } from '@/composables/useDialog'
import { useCartStore } from '@/stores/cart'
import { defineAsyncComponent, ref } from 'vue'

const DialogBox = defineAsyncComponent(() => import('@/components/DialogBox.vue'))
const { product } = defineProps(['product'])

const { dialogMsg, showDialog, createDialog, closeDialog } = useDialog()
const { addItem } = useCartStore()
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
    addItem(item, quantity.value)
    createDialog('Added successfully!')
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
    <DialogBox v-if="showDialog" @closeMsgBox="closeDialog" :dialogMsg />
</template>

<style lang="scss" scoped>
.addToCart {
    margin-top: 46px;
    display: flex;

    p {
        margin-right: 16px;
        padding: 0 16px;
        width: 120px;
        height: 48px;
        background-color: $block_bg;
        display: flex;
        justify-content: space-between;
        align-items: center;

        span {
            width: 20px;
            display: block;
            font-size: 16px;
            font-weight: bold;
            line-height: 48px;
            text-align: center;
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

            span {
                line-height: 40px;
            }
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