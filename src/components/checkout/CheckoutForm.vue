<script setup>
import OrderDetails from '@/components/checkout/OrderDetails.vue'
import OrderSummary from '@/components/checkout/OrderSummary.vue'

const { emptyCart } = defineProps(['emptyCart'])
</script>

<template>
    <form action="" method="post" autocomplete="off" @keydown.enter.prevent @submit.prevent>
        <OrderDetails v-show="!emptyCart" />
        <OrderSummary />
    </form>
</template>

<style lang="scss" scoped>
form {
    display: flex;
    justify-content: space-between;

    section {
        border-radius: 10px;
        background-color: $white;
    }
}

@media screen and (max-width:1024px) {
    form {
        display: block;
    }
}
</style>