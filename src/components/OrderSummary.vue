<script setup>
import OrderItemList from '@/components/OrderItemList.vue'
import OrderNotes from '@/components/OrderNotes.vue'

import { useCartStore } from '@/stores/cart'
import { storeToRefs } from 'pinia'
const { cartList, emptyCart } = storeToRefs(useCartStore())
</script>

<template>
    <section class="summary" :class="{ 'empty': emptyCart }">
        <h2>Summary</h2>
        <p v-if="emptyCart" class="defaultText">You have not added any products yet.</p>
        <template v-else>
            <OrderItemList :cartList>
                <p class="amount">x{{ item.amount }}</p>
            </OrderItemList>
            <OrderNotes />
        </template>
    </section>
</template>

<style lang="scss" scoped>
.summary {
    flex-basis: 35%;
    align-self: flex-start;
    margin-left: 30px;
    padding: 24px;

    h2 {
        margin-bottom: 32px;
        font-size: 18px;
        line-height: 24px;
        letter-spacing: 1.3px;
    }

    .defaultText {
        font-size: 14px;
        opacity: 0.5;
    }
}

.summary.empty {
    flex-basis: 100%;
    margin-left: 0;
}

@media screen and (max-width:1024px) {
    .summary {
        margin-left: 0;
    }
}
</style>