<script setup>
import MenuList from '@/components/shared/MenuList.vue'
import PopularProducts from '@/components/home/PopularProducts.vue'
</script>

<template>
    <div class="transitionWrapper">
        <MenuList />

        <main>
            <PopularProducts />
        </main>
    </div>
</template>

<style lang="scss" scoped>
.menuList {
    margin-top: 120px;
}

main {
    display: grid;
    grid-template-rows: minmax(450px, 1.5fr) minmax(300px, 1fr) minmax(300px, 1fr);
    grid-template-columns: repeat(2, 1fr);
    gap: 48px 30px;
}

@media screen and (max-width:1024px) {
    .menuList {
        margin: 96px 0;
    }

    main {
        grid-template-rows: minmax(675px, 2.25fr) minmax(300px, 1fr) minmax(300px, 1fr);
        gap: 32px 12px;
    }
}

@media screen and (max-width:730px) {
    main {
        grid-template-rows: minmax(600px, 2.25fr) 1fr 1fr;
    }
}

@media screen and (max-width:500px) {
    .menuList {
        margin: 40px 0 120px 0;
    }

    main {
        grid-template-rows: minmax(520px, 2.25fr) 1fr 1fr 1fr;
        grid-template-columns: 100%;
        gap: 24px;


    }
}
</style>