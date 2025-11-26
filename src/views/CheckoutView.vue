<script setup>
import CheckoutForm from '@/components/checkout/CheckoutForm.vue'
import { useCartStore } from '@/stores/cart'
import { useModalStore } from '@/stores/modal'
import { storeToRefs } from 'pinia'
import { useEventListener } from '@vueuse/core'
import { onBeforeRouteLeave } from 'vue-router'

const { emptyCart } = storeToRefs(useCartStore())
const modalStore = useModalStore()
const { showModal } = storeToRefs(modalStore)
const { closeThankModal } = modalStore

function closeThankModalHandler() {
    if (showModal.value) { closeThankModal() }
}

useEventListener(window, 'pagehide', closeThankModalHandler)
onBeforeRouteLeave(closeThankModalHandler)
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