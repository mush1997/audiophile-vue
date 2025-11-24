<script setup>
import OrderItemList from '@/components/shared/OrderItemList.vue'
import { useCartStore } from '@/stores/cart'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

const { cartList } = storeToRefs(useCartStore())
const isCollapsed = ref(cartList.value.length > 1)
</script>

<template>
    <div class="leftPart" :class="{ 'centered': cartList.length === 1 }">
        <OrderItemList v-slot="{ item }" :class="{ 'show': !isCollapsed }" :cartList>
            <p class="amount">x{{ item.amount }}</p>
        </OrderItemList>
        <div class="dropdown" v-if="cartList.length > 1">
            <p v-show="isCollapsed" @click="isCollapsed = !isCollapsed">and <span>{{ cartList.length - 1
                    }}</span> other item(s)</p>
            <p v-show="!isCollapsed" @click="isCollapsed = !isCollapsed">View less</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.leftPart {
    flex-basis: 360px;
    flex-grow: 1;
    padding: 8px 20px;
    max-height: 170px;
    overflow-x: hidden;
    overflow-y: auto;
    overscroll-behavior: none;
    scrollbar-gutter: stable;
    border-radius: 10px 0 0 10px;
    background-color: $block_bg;

    :deep(p) {
        font-weight: bold;
        opacity: 0.5;
    }
}

.leftPart.centered {
    display: flex;
    align-items: center;
}

:deep(.item) {
    margin-top: 0;
    padding: 12px 0;
    min-width: 300px;

    &>div {
        width: 85%;
        display: inline-flex;

        img {
            width: 50px;
        }

        div {
            p:nth-child(1) {
                margin-bottom: 4px;
                line-height: 20px;
                opacity: 1;
            }
        }
    }

    .amount {
        display: inline-block;
        vertical-align: top;
    }
}

:deep(.item):not(:first-of-type) {
    display: none;
}

:deep(.item).show:not(:first-of-type) {
    display: flex;
}

.dropdown {
    padding: 12px 0;
    text-align: center;
    border-top: 2px solid gainsboro;

    p {
        font-size: 13px;
        display: inline-block;
        animation: dropdownOpen 0.8s forwards;

        span {
            font-size: 13px;
            font-weight: bold;
        }
    }
}

@keyframes dropdownOpen {
    from {
        opacity: 0;
    }

    to {
        opacity: 0.5;
    }
}

@media screen and (hover:hover) {
    .dropdown p:hover {
        cursor: pointer;
    }
}

@media screen and (max-width:680px) {
    .leftPart {
        flex-basis: 100%;
        flex-grow: 0;
        padding: 8px 16px;
        border-radius: 10px 10px 0 0;
    }

    :deep(.item) {
        min-width: auto;
    }
}

@media screen and (max-width:500px) {
    :deep(.item) {
        &>div img {
            margin-right: 8px;
            width: 40px;
        }

        .amount {
            margin-left: 12px;
        }
    }
}

@media screen and (max-width:400px) {
    .leftPart {
        max-height: 180px;
    }

    :deep(.item) {
        &>div {
            width: 100%;
        }

        .amount {
            margin-left: 48px;
        }
    }
}
</style>