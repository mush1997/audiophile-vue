<script setup>
import MainButton from '@/components/MainButton.vue'
import { useAssets } from '@/composables/useAssets'
import { useSizeStore } from '@/stores/size'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

const { picSize } = storeToRefs(useSizeStore())

const products = computed(() => [
    {
        slug: "zx9-speaker",
        name: "ZX9 Speaker",
        description: "Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.",
        buttonClass: "blackBtn",
        bgImg: [useAssets(`/src/assets/home/${picSize.value}/image-speaker-zx9.png`), ("/src/assets/home/desktop/pattern-circles.svg")]
    },
    {
        slug: "zx7-speaker",
        name: "ZX7 Speaker",
        description: "Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
        buttonClass: "hollowBtn",
        bgImg: [useAssets(`/src/assets/home/${picSize.value}/image-speaker-zx7.jpg`)]
    },
    {
        slug: "yx1-earphones",
        name: "YX1 Earphones",
        description: "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
        buttonClass: "hollowBtn",
        bgImg: [useAssets(`/src/assets/home/${picSize.value}/image-earphones-yx1.jpg`)]
    }
])
</script>

<template>
    <template v-for="(product, index) in products" :key="product.name">
        <section v-if="index === products.length - 1" :class="`item${index + 1}Pic`"
            :style="{ backgroundImage: `url(${product.bgImg[0]})` }"></section>
        <section :class="`item${index + 1}`"
            :style="index === products.length - 1 ? '' : { backgroundImage: `url(${product.bgImg[0]}), url(${product.bgImg[1]})` }">
            <div>
                <h2>{{ product.name }}</h2>
                <p v-if="index === 0"> {{ product.description }}</p>
                <MainButton :class="product.buttonClass"
                    @click="$router.push({ path: `/product/${product.slug}` }).catch(error => error)">See
                    product</MainButton>
            </div>
        </section>
    </template>
</template>

<style lang="scss" scoped>
section {
    padding: 96px;
    border-radius: 10px;
    background-repeat: no-repeat;

    div {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
}

.item1 {
    grid-area: 1/1/2/3;
    background-color: $primary;
    background-position: left 20% bottom -10px, left -10% top 10%;
    background-size: auto 75%, 68% auto;

    div {
        padding-left: 55%;
        width: 100%;

        h2 {
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
}

.item2 h2,
.item3 h2 {
    font-size: 28px;
    font-weight: bold;
    line-height: 38px;
    letter-spacing: 2px;
    text-transform: uppercase;
}

.item2 {
    grid-area: 2/1/3/3;
    background-position: right top;
    background-size: cover;
}

.item3Pic {
    grid-area: 3/1/4/2;
    background-position: center;
    background-size: cover;
}

.item3 {
    grid-area: 3/2/4/3;
    background-color: $block_bg;
}

@media screen and (min-width:1600px) {
    section {
        padding: 96px 140px;
    }
}

@media screen and (max-width:1200px) {
    section {
        padding: 70px;
    }

    .item1 {
        background-position: left 15% bottom -10px, left -10% top 10%;
        background-size: auto 72%, 68% auto;
    }
}

@media screen and (max-width:1024px) {
    section {
        padding: 60px;
    }

    .item1 {
        background-position: center top 40px, center top -40px;
        background-size: 30% auto, 110% auto;
        position: relative;

        div {
            padding: 60px;
            height: auto;
            text-align: center;
            position: absolute;
            left: 0;
            bottom: 0;

            button {
                margin-left: auto;
                margin-right: auto;
            }
        }
    }

    .item2 {
        background-position: right bottom;
    }
}

@media screen and (max-width:730px) {
    section {
        padding: 32px;
    }

    .item1 {
        background-size: 35% auto, 110% auto;

        div {
            padding: 32px 48px;
        }
    }

    .item2 {
        background-position: right top;
    }
}

@media screen and (max-width:500px) {
    section {
        padding: 24px;
    }

    .item1 {
        grid-area: 1/1/2/2;

        div {
            padding: 24px;

            h2 {
                font-size: 36px;
                line-height: 40px;
                letter-spacing: 1.3px;
            }
        }
    }

    .item2 {
        grid-area: 2/1/3/2;
        background-position: right bottom 20%;
    }

    .item3Pic {
        grid-area: 3/1/4/2;
    }

    .item3 {
        grid-area: 4/1/5/2;
    }
}
</style>