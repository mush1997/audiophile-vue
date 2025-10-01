<script setup>
import CustomerInfo from '@/components/CustomerInfo.vue';
import ShippingInfo from '@/components/ShippingInfo.vue';
import PaymentInfo from '@/components/PaymentInfo.vue';

</script>

<template>
    <section class="checkout">
        <h1>Checkout <span>(Please fill in the following form in English/numbers only.)</span></h1>
        <CustomerInfo />
        <ShippingInfo />
        <PaymentInfo />
    </section>
</template>

<style lang="scss" scoped>
.checkout {
    flex-basis: 65%;
    padding: 32px;

    h1 {
        margin-bottom: 40px;
        font-size: 32px;
        line-height: 36px;
        letter-spacing: 1.15px;

        span {
            margin-top: 10px;
            font-size: 13px;
            line-height: 18px;
            letter-spacing: 0;
            word-spacing: 1px;
            text-transform: none;
            font-style: italic;
            opacity: 0.5;
            display: block;
        }
    }
}

@media screen and (max-width:1024px) {
    .checkout {
        margin-bottom: 32px;
    }
}

@media screen and (max-width:680px) {
    .checkout {
        padding: 24px;
    }
}
</style>

<style lang="scss">
.fieldSet {
    margin-bottom: 60px;

    .fieldTitle {
        margin-bottom: 16px;
        font-size: 13px;
        font-weight: bold;
        color: $primary;
        letter-spacing: 0.9px;
        text-transform: uppercase;
    }
}

.row {
    margin-bottom: 24px;
    display: flex;
    justify-content: space-between;

    div {
        flex-basis: 48%;
        position: relative;

        p:first-child {
            margin-bottom: 4px;
            font-size: 12px;
            font-weight: bold;
        }

        input[type="text"] {
            padding: 6px 12px;
            width: 100%;
            font-size: 13px;
            border-radius: 10px;
            border: 2px solid $input_border;
            outline: none;

            &:focus {
                border-color: $primary;
                caret-color: $primary;
            }
        }
    }
}

.row:last-child {
    margin-bottom: 0;
}

@media screen and (max-width:500px) {
    .row {
        margin-bottom: 0;
        display: block;

        div {
            margin-top: 24px;
        }
    }

    .row:first-of-type div:first-child {
        margin-top: 0;
    }
}
</style>