<script setup>
import CheckoutForm from '@/components/CheckoutForm.vue'
import { onMounted } from 'vue'

onMounted(() => {
    if (cartList.length === 0) {
        const height = document.querySelector("footer").clientHeight + document.querySelector("header").clientHeight
        document.querySelector("main").style.minHeight = `calc(100vh - ${height}px)`
    }
})
</script>

<template>
    <main>
        <p class="goBack" @click="$router.go(-1)">Go Back</p>
        <CheckoutForm />
    </main>
</template>

<style lang="scss" scoped>
main {
    margin-bottom: 130px;
}

@media screen and (max-width:500px) {
    main {
        margin-bottom: 96px;
    }
}
</style>