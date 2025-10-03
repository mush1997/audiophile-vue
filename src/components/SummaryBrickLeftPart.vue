<script setup>
import OrderItemList from './OrderItemList.vue'

import { useCartStore } from '@/stores/cart'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

const { cartList } = storeToRefs(useCartStore())
const showLess = ref(cartList.value.length > 1)
</script>

<template>
    <div class="leftPart" :class="{ 'centered': cartList.length === 1 }">
        <OrderItemList :class="{ 'show': !showLess }" :cartList>
            <p class="amount">x{{ item.amount }}</p>
        </OrderItemList> />
        <div class="dropdown" :class="{ 'hide': cartList.length === 1 }">
            <p v-show="showLess" @click="showLess = !showLess">and <span>{{ cartList.length - 1 }}</span> other item(s)
            </p>
            <p v-show="!showLess" @click="showLess = !showLess">View less</p>
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
    padding: 12px 0;
    width: 100%;
    min-width: 300px;
    display: none;

    &>div {
        width: 85%;
        display: inline-flex;
        align-items: center;

        img {
            margin-right: 16px;
            width: 50px;
        }

        div {
            p:nth-child(1) {
                margin-bottom: 4px;
                line-height: 20px;
                opacity: 1;
            }

            p:nth-child(2) {
                font-size: 14px;
            }
        }
    }

    .amount {
        margin-left: 24px;
        font-weight: bold;
        opacity: 0.5;
        display: inline-block;
        vertical-align: top;
    }
}

:deep(.item):first-of-type {
    display: block;
}

:deep(.item):not(:first-of-type).show {
    display: block;
    animation: showing 0.8s forwards;
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