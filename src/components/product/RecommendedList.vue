<script setup>
import RecommendedListItem from '@/components/product/RecommendedListItem.vue'

const { otherItems } = defineProps(['otherItems'])
</script>

<template>
    <section class="recommended">
        <h3>You may also like</h3>
        <RecommendedListItem :otherItems />
    </section>
</template>

<style lang="scss" scoped>
.recommended {
    margin: 160px 0;
    padding: 0 11%;
    width: 100%;
    text-align: center;

    h3 {
        margin-bottom: 64px;
        font-size: 32px;
        line-height: 36px;
        letter-spacing: 1.15px;
    }
}

@media screen and (max-width:1024px) {
    .recommended {
        margin: 120px 0;
        padding: 0 40px;

        h3 {
            margin-bottom: 52px;
            font-size: 28px;
        }
    }
}

@media screen and (max-width:700px) {
    .recommended h3 {
        margin-bottom: 40px;
        font-size: 24px;
        letter-spacing: 1px;
    }
}

@media screen and (max-width:500px) {
    .recommended {
        padding: 0 24px;
    }
}
</style>