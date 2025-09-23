<script setup>
import { inject } from 'vue'
import MainButton from '@/components/MainButton.vue'

const product = inject('product')
</script>

<template>
    <section class="heroPicText">
        <p class="specialTitle">New product</p>
        <h1>{{ product.name }}</h1>
        <p>{{ product.description }}</p>
        <MainButton @click="$router.push({ path: `/product/${product.slug}` }).catch(error => error)">See
            product</MainButton>
    </section>
</template>

<style lang="scss" scoped>
.heroPicText {
    margin: 130px 0 130px 11%;
    width: 33%;
    min-width: 400px;

    .specialTitle {
        color: $white;
        opacity: 0.5;
    }

    h1 {
        margin: 24px 0;
        font-size: 56px;
        line-height: 58px;
        color: $white;
        letter-spacing: 2px;
    }

    p {
        color: $white;
        opacity: 0.75;
    }
}

@media screen and (max-width:1024px) {
    .heroPicText {
        margin: 130px auto;
        width: 50%;
        text-align: center;
    }
}

@media screen and (max-width:500px) {
    .heroPicText {
        margin: 100px auto;
        padding: 0 24px;
        width: 100%;
        min-width: auto;

        h1 {
            font-size: 36px;
            line-height: 40px;
            letter-spacing: 1.3px;
        }
    }
}
</style>