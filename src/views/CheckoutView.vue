<script setup>
import CheckoutForm from '@/components/checkout/CheckoutForm.vue'
import { useCartStore } from '@/stores/cart'
import { storeToRefs } from 'pinia'

const { emptyCart } = storeToRefs(useCartStore())
</script>

<template>
    <main :class="{ 'basicHeight': emptyCart }">
        <p class="goBack" @click="$router.go(-1)">Go Back</p>
        <CheckoutForm :emptyCart />
    </main>
</template>

<style lang="scss" scoped>
main {
    margin-bottom: 130px;
}

.basicHeight {
    min-height: calc(100vh - 430px);
}

@media screen and (max-width:500px) {
    main {
        margin-bottom: 96px;
    }
}
</style>