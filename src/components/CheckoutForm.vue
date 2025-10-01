<script setup>
import OrderDetails from '@/components/OrderDetails.vue';
import OrderSummary from '@/components/OrderSummary.vue';
</script>

<template>
    <form action="" method="post" autocomplete="off" @keydown.enter.prevent @submit.prevent>
        <OrderDetails v-show="cartList.length !== 0" />
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