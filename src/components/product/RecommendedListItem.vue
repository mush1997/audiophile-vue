<script setup>
import MainButton from '@/components/shared/MainButton.vue'
import { useAssets } from '@/composables/useAssets'
import { useSizeStore } from '@/stores/size'
import { storeToRefs } from 'pinia'

const { otherItems } = defineProps(['otherItems'])
const { picSize } = storeToRefs(useSizeStore())
</script>

<template>
    <div class="container">
        <div v-for="item in otherItems" :key="item.slug">
            <img :src="useAssets(`/src${item.image[picSize]}`)" :alt="item.name">
            <h4>{{ item.name }}</h4>
            <MainButton @click="$router.push({ path: `/product/${item.slug}` }).catch(error => error)">See
                product</MainButton>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    display: flex;
    justify-content: center;
    gap: 30px;

    div {
        flex-basis: 33%;
        text-align: center;

        img {
            width: 100%;
            border-radius: 10px;
        }

        h4 {
            margin-top: 28px;
            font-size: 24px;
            line-height: 33px;
            letter-spacing: 1.7px;
        }

        button {
            margin-top: 28px;
        }
    }
}

@media screen and (min-width:1700px) {
    .container {
        gap: 60px;
    }
}

@media screen and (max-width:1024px) {
    .container div img {
        max-width: 240px;
    }
}

@media screen and (max-width:820px) {
    .container {
        gap: 20px;

        div {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;

            img {
                max-width: 220px;
            }

            h4 {
                margin-top: 20px;
                max-width: 140px
            }

            button {
                margin-top: 20px;
                width: 140px;
                height: 40px;
            }
        }
    }
}

@media screen and (max-width:700px) {
    .container {
        justify-content: space-around;

        div {
            h4 {
                max-width: 120px;
                font-size: 19px;
            }

            button {
                width: 120px;
                height: 36px;
                font-size: 12px;
            }
        }
    }
}

@media screen and (max-width:500px) {
    .container {
        flex-wrap: wrap;
        justify-content: flex-start;
        gap: 56px;

        div {
            flex-basis: 100%;

            img {
                max-width: 100%;
            }

            h4 {
                max-width: none;
            }

            button {
                margin-top: 16px;
                font-size: 13px;
            }

        }
    }
}
</style>