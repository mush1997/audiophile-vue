<script setup>
import HeaderSection from '@/components/HeaderSection.vue'
import LatestProduct from '@/components/LatestProduct.vue'
import MenuList from '@/components/MenuList.vue'
import PopularProducts from '@/components/PopularProducts.vue'
import AsideSection from '@/components/AsideSection.vue'
import FooterSection from '@/components/FooterSection.vue'

import { provide } from 'vue'

const product = {
    slug: "xx99-mark-two-headphones",
    name: "XX99 Mark II Headphones",
    description: "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
}

provide('product', product)
</script>

<template>
    <HeaderSection>
        <LatestProduct />
    </HeaderSection>

    <MenuList class="menu hide" />
    <MenuList />

    <main>
        <PopularProducts />
    </main>

    <AsideSection />
    <FooterSection />
</template>

<style lang="scss" scoped>
header {
    height: 730px;
    background-image: url("@/assets/home/desktop/image-hero.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}

.menuComponent {
    margin-top: 120px;
}

main {
    display: grid;
    grid-template-rows: minmax(450px, 1.5fr) minmax(300px, 1fr) minmax(300px, 1fr);
    grid-template-columns: repeat(2, 1fr);
    gap: 48px 30px;
}

aside {
    margin: 200px 0;
}

@media screen and (max-width:1024px) {
    header {
        background-image: url("@/assets/home/tablet/image-header.jpg");
        background-position: bottom center;
    }

    .menuComponent {
        margin: 96px 0;
    }

    .menu {
        margin: 0;
    }

    main {
        grid-template-rows: minmax(675px, 2.25fr) minmax(300px, 1fr) minmax(300px, 1fr);
        gap: 32px 12px;
    }

    aside {
        margin: 96px 0;
    }
}

@media screen and (max-width:730px) {
    main {
        grid-template-rows: minmax(600px, 2.25fr) 1fr 1fr;
    }
}

@media screen and (max-width:500px) {
    header {
        height: 600px;
        background-image: url("@/assets/home/mobile/image-header.jpg");
    }

    .menuComponent {
        margin: 40px 0 120px 0;
    }

    .menu {
        margin: 0;
    }

    main {
        grid-template-rows: minmax(520px, 2.25fr) 1fr 1fr 1fr;
        grid-template-columns: 100%;
        gap: 24px;


    }

    aside {
        margin: 120px 0;
    }
}
</style>
