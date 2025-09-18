<script setup>
import MainButton from '@/components/MainButton.vue'

// function plusOrMinusQuantity(event) {
//     if (event.target.id === "plus") {
//         quantity.textContent = Number(quantity.textContent) + 1;
//     } else if (quantity.textContent !== "1") {
//         quantity.textContent = Number(quantity.textContent) - 1;
//     }
// }

// function addToCart() {
//     let productName = document.querySelector(".overview h1").textContent;
//     let productSlug = document.querySelector(".overview div").dataset.slug;
//     let productPrice = document.querySelector(".price").textContent;
//     let product = { "name": productName, "slug": productSlug, "price": productPrice, "amount": Number(quantity.textContent) };
//     let list = JSON.parse(window.localStorage.getItem("cartList"));

//     if (!list) {
//         window.localStorage.setItem("cartList", JSON.stringify([product]));
//     } else {
//         let index = list.findIndex(item => item["name"] === productName);
//         index < 0 ? list.push(product) : list[index]["amount"] += Number(quantity.textContent);
//         window.localStorage.setItem("cartList", JSON.stringify(list));
//     }

//     showPopupMsg("Added successfully!");
//     quantity.textContent = "1";
// }
</script>

<template>
    <div class="addToCart">
        <p><span id="minus" @click="plusOrMinusQuantity">-</span><span id="quantity">1</span><span id="plus"
                @click="plusOrMinusQuantity">+</span></p>
        <MainButton @click="addToCart">Add to cart</MainButton>
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