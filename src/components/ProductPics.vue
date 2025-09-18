<script setup>
import { useAssets } from '@/composables/useAssets'

const { pics, picSize } = defineProps(['pics', 'picSize'])
</script>

<template>
    <section class="pics">
        <img :src="useAssets(`/src${pics.first[picSize]}`)" alt="pic 1">
        <img :src="useAssets(`/src${pics.second[picSize]}`)" alt="pic 2">
        <img :src="useAssets(`/src${pics.third[picSize]}`)" alt="pic 3">
    </section>
</template>

<style lang="scss" scoped>
.pics {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: 1fr 1.4fr;
    gap: 32px 30px;

    img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
    }

    img:nth-child(2) {
        grid-area: 2/1/3/2;
    }

    img:last-child {
        grid-area: 1/2/3/3;
    }
}

@media screen and (min-width:1700px) {
    .pics {
        gap: 62px 60px;
    }
}

@media screen and (max-width:700px) {
    .pics {
        gap: 20px 18px;
    }
}

@media screen and (max-width:500px) {
    .pics {
        margin-bottom: 120px;
        grid-template-rows: 1fr 1fr 2fr;
        grid-template-columns: 100%;

        img:nth-child(2) {
            grid-area: 2/1/3/2;
        }

        img:last-child {
            grid-area: 3/1/4/2;
        }
    }
}
</style>