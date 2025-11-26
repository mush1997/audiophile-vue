<script setup>
import MenuListItem from '@/components/shared/MenuListItem.vue'

const categories = [
    {
        name: 'Headphones',
        img: '/assets/shared/desktop/image-category-thumbnail-headphones.png'
    },
    {
        name: 'Speakers',
        img: '/assets/shared/desktop/image-category-thumbnail-speakers.png'
    },
    {
        name: 'Earphones',
        img: '/assets/shared/desktop/image-category-thumbnail-earphones.png'
    }
]
</script>

<template>
    <section class="menuList">
        <MenuListItem :categories />
    </section>
</template>

<style lang="scss" scoped>
.menuList {
    margin: 160px 0;
    padding: 0 11%;
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 30px;
}

@media screen and (min-width:1700px) {
    .menuList {
        gap: 60px;
    }
}

@media screen and (max-width:1024px) {
    .menuList {
        margin: 120px 0;
        padding: 0 40px;
    }
}

@media screen and (max-width:820px) {
    .menuList {
        gap: 20px;
    }
}


@media screen and (max-width:500px) {
    .menuList {
        padding: 0 24px;
        flex-wrap: wrap;
        justify-content: flex-start;
        gap: 16px;
    }
}
</style>