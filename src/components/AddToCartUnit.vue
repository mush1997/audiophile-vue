<script setup>
import MainButton from '@/components/MainButton.vue'
import { ref } from 'vue'

const { product } = defineProps(['product'])
const emit = defineEmits(['showDialogBox'])
const quantity = ref(1)

function plusOrMinusQuantity(operator) {
    if (operator === "plus") {
        quantity.value++
    } else if (operator === "minus" && quantity.value !== 1) {
        quantity.value--
    }
}

function addToCart(product) {
    const item = { "name": product.name, "slug": product.slug, "price": product.price, "amount": quantity.value }
    const list = JSON.parse(window.localStorage.getItem("cartList"))

    if (!list) {
        window.localStorage.setItem("cartList", JSON.stringify([item]))
    } else {
        const index = list.findIndex(items => items["name"] === item.name)
        index < 0 ? list.push(item) : list[index]["amount"] += quantity.value
        window.localStorage.setItem("cartList", JSON.stringify(list))
    }

    emit('showDialogBox', 'Added successfully!')
    quantity.value = 1
}
</script>

<template>
    <div class="addToCart">
        <p>
            <span id="minus" @click="plusOrMinusQuantity('minus')">-</span>
            <span id="quantity">{{ quantity }}</span>
            <span id="plus" @click="plusOrMinusQuantity('plus')">+</span>
        </p>
        <MainButton @click="addToCart(product)">Add to cart</MainButton>
    </div>
</template>

<style lang="scss" scoped>
.addToCart {
    margin-top: 46px;
    display: flex;

    p {
        margin-right: 16px;
        padding: 16px;
        width: 120px;
        height: 48px;
        background-color: $block_bg;
        display: flex;
        justify-content: space-between;
        align-items: center;

        span {
            font-size: 14px;
            font-weight: bold;
        }

        #minus,
        #plus {
            font-size: 18px;
            opacity: 0.25;
        }
    }

    button {
        margin-top: 0;
    }
}

@media screen and (hover:hover) {

    #minus:hover,
    #plus:hover {
        cursor: pointer;
        color: $primary;
        opacity: 1;
    }
}

@media screen and (max-width:1024px) {
    .addToCart {
        margin-top: 30px;
    }
}

@media screen and (max-width:700px) {
    .addToCart {
        margin-top: 24px;

        p {
            margin-right: 10px;
            width: 100px;
            height: 40px;
        }

        button {
            width: 120px;
            height: 40px;
        }
    }
}

@media screen and (max-width:500px) {
    .addToCart {
        margin-top: 30px;

        p {
            margin-right: 16px;
        }
    }
}
</style>