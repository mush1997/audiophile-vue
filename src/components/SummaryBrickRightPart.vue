<script setup>
import { useCartStore } from '@/stores/cart'
import { storeToRefs } from 'pinia'

const { grandTotal } = storeToRefs(useCartStore())
</script>

<template>
    <div class="rightPart">
        <p>Grand Total</p>
        <p class="grandTotalNum">$ {{ grandTotal.toLocaleString() }}</p>
    </div>
</template>

<style lang="scss" scoped>
.rightPart {
    flex-basis: 150px;
    padding: 24px;
    background-color: $black;
    border-radius: 0 10px 10px 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    p:first-child {
        margin-bottom: 8px;
        color: $white;
        text-transform: uppercase;
        opacity: 0.5;
    }

    .grandTotalNum {
        font-size: 18px;
        font-weight: bold;
        color: $white;
    }
}

@media screen and (max-width:680px) {
    .rightPart {
        flex-basis: 100%;
        border-radius: 0 0 10px 10px;
        justify-content: flex-start;
    }
}
</style>