<script setup>
import MainButton from '@/components/MainButton.vue'
import { useAssets } from '@/composables/useAssets'
import { useSizeStore } from '@/stores/size'
import { storeToRefs } from 'pinia'

const { otherItems } = defineProps(['otherItems'])
const { picSize } = storeToRefs(useSizeStore())
</script>

<template>
    <section class="recommended">
        <h3>You may also like</h3>
        <div class="container">
            <div v-for="item in otherItems" :key="item.slug">
                <img :src="useAssets(`/src${item.image[picSize]}`)" :alt="item.name">
                <h4>{{ item.name }}</h4>
                <MainButton @click="$router.push({ path: `/product/${item.slug}` }).catch(error => error)">See
                    product</MainButton>
            </div>
        </div>
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
    .recommended {
        margin: 120px 0;
        padding: 0 40px;

        h3 {
            margin-bottom: 56px;
        }
    }

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

@media screen and (max-width:640px) {
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
    .recommended {
        padding: 0 24px;

        h3 {
            margin-bottom: 40px;
            font-size: 24px;
            letter-spacing: 1px;
        }
    }

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
                font-size: 24px;
            }

            button {
                margin-top: 16px;
                font-size: 13px;
            }

        }
    }
}
</style>