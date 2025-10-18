<script setup>
import OrderItemList from '@/components/OrderItemList.vue'
import CartQuantityUnit from '@/components/CartQuantityUnit.vue'
import MainButton from '@/components/MainButton.vue'
import DialogBox from '@/components/DialogBox.vue'
import { useDialog } from '@/composables/useDialog'
import { useCartStore } from '@/stores/cart'
import { useShadowStore } from '@/stores/shadow'
import { storeToRefs } from 'pinia'
import { useTemplateRef, onMounted, watch } from 'vue'

const { dialogMsg, showDialog, createDialog, closeDialog } = useDialog()
const cartStore = useCartStore()
const { cartList, hideCart, emptyCart, total } = storeToRefs(cartStore)
const { resetCart } = cartStore

const shadowStore = useShadowStore()
const { cartShadow } = storeToRefs(shadowStore)
const { hideShadow } = shadowStore
const cart = useTemplateRef('cart')

function removeAll() {
    if (emptyCart.value) { return }
    hideShadow(hideCart, cartShadow)
    createDialog('Your cart is empty now.')
    resetCart()
}

onMounted(() => {
    watch(cartShadow, () => {
        cart.value.scrollTop = 0
    })
})
</script>

<template>
    <section class="cart" :class="{ 'hide': hideCart }" ref="cart">
        <div class="cartTitle">
            <p>Cart (<span>{{ cartList.length || 0 }}</span>)</p>
            <p @click="removeAll">Remove All</p>
        </div>
        <p v-if="emptyCart" class="defaultText">Your cart is empty.</p>
        <template v-else>
            <OrderItemList :cartList v-slot="{ item }">
                <CartQuantityUnit @showDialogBox="createDialog" :item />
            </OrderItemList>
            <div class="totalSum">
                <p><span>Total</span><span class="totalNum">{{ total.toLocaleString() }}</span></p>
                <MainButton @click="$router.push({ path: '/checkout' }).catch(error => error)">Checkout</MainButton>
            </div>
        </template>
    </section>
    <DialogBox v-if="showDialog" @closeMsgBox="closeDialog" :dialogMsg />
</template>

<style lang="scss" scoped>
.cart {
    padding: 32px;
    width: 30%;
    min-width: 480px;
    max-width: 650px;
    max-height: calc(100vh - 240px);
    overflow-y: auto;
    overscroll-behavior: none;
    border-radius: 10px;
    background-color: $white;
    position: absolute;
    top: 120px;
    right: 11%;
    z-index: 10;
    animation: showing 0.8s forwards;
}

.hide {
    display: none;
}

.cartTitle {
    margin-bottom: 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p:nth-child(1),
    p:nth-child(1) span {
        font-size: 18px;
        font-weight: bold;
        line-height: 24px;
        letter-spacing: 1.3px;
    }

    p:nth-child(1) {
        text-transform: uppercase;

        span {
            color: $black;
        }
    }

    p:nth-child(2) {
        opacity: 0.5;
    }
}

.defaultText {
    text-align: center;
    font-size: 14px;
    letter-spacing: 0.5px;
    opacity: 0.5;
}

:deep(.item) {
    align-items: center;

    &>div {
        flex-basis: 70%;
    }
}

.totalSum {
    margin-top: 32px;

    p {
        display: flex;
        justify-content: space-between;
        align-items: center;

        span:first-child {
            text-transform: uppercase;
            opacity: 0.5;
        }

        .totalNum {
            font-size: 18px;
            font-weight: bold;
        }
    }

    button {
        margin-top: 24px;
        width: 100%;
    }
}

@media screen and (hover:hover) {
    .cartTitle p:nth-child(2):hover {
        cursor: pointer;
        color: $primary;
        text-decoration: underline;
        opacity: 1;
    }
}

@media screen and (max-width:1200px) {
    :deep(.item) {
        &>div img {
            width: 90px;
        }
    }
}

@media screen and (max-width:1024px) {
    .cart {
        width: 75%;
        min-width: auto;
        max-width: 480px;
        right: 40px;
    }
}

@media screen and (max-width:500px) {
    .cart {
        margin: 0 24px;
        padding: 24px;
        width: calc(100% - 48px);
        max-width: auto;
        right: 0;
    }

    .defaultText {
        text-align: left;
    }

    .totalSum button {
        height: 40px;
    }
}

@media screen and (max-width:460px) {
    .cart {
        padding: 20px 16px;
    }

    :deep(.item) {
        &>div div {
            p:nth-child(1) {
                font-size: 13px;
                line-height: 18px;
            }

            p:nth-child(2) {
                font-size: 13px;
            }
        }
    }
}
</style>