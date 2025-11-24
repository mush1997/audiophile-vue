<script setup>
import TextInput from '@/components/TextInput.vue'
import { useInputField } from '@/composables/useInputField'
import { ref, computed } from 'vue'

const creditCardField = useInputField('cardNumber')
const cvcField = useInputField('CVC')
const payment = ref('credit card')
const creditCard = computed(() => payment.value === 'credit card')
const onDelivery = computed(() => payment.value === 'on delivery')
</script>

<template>
    <div class="fieldSet paymentOptions">
        <p class="fieldTitle">Payment details</p>
        <div class="row">
            <div>
                <p>Payment Method</p>
            </div>
            <div>
                <label :class="{ 'selected': creditCard }">
                    <input type="radio" name="Payment" value="credit card" v-model="payment">
                    Credit card
                </label>
                <label :class="{ 'selected': onDelivery }">
                    <input type="radio" name="Payment" value="on delivery" v-model="payment">
                    Cash on delivery
                </label>
            </div>
        </div>
    </div>

    <div v-show="onDelivery" class="reminder">
        <img src="@/assets/checkout/icon-cash-on-delivery.svg" alt="best-gear">
        <p>The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives
            at your residence. Just make sure your address is correct so that your order will not be
            cancelled.</p>
    </div>

    <div v-show="creditCard" class="fieldSet creditCard">
        <div class="row">
            <TextInput name="cardNumber" inputTitle="Credit Card Number" placeholder="e.g. 1234 5678 9123 0000"
                maxlength="19" :field="creditCardField" @setTyped="creditCardField.markAsTyped()"
                v-model="creditCardField.val" />
            <TextInput name="CVC" inputTitle="CVC" placeholder="e.g. 123" maxlength="3" :field="cvcField"
                @setTyped="cvcField.markAsTyped()" v-model="cvcField.val" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.paymentOptions {
    position: relative;

    label {
        margin-bottom: 16px;
        padding: 0 12px;
        height: 40px;
        display: flex;
        align-items: center;
        border-radius: 10px;
        border: 2px solid $input_border;
        outline: none;
        position: relative;

        &::before,
        &::after {
            content: "";
            border-radius: 50%;
            width: 16px;
            height: 16px;
            position: absolute;
            top: 50%;
            left: 12px;
        }

        &::before {
            border: 1px solid $input_border;
            margin-right: 8px;
            transform: translateY(-50%);
        }

        &::after {
            display: none;
            border: 1px solid $primary;
            background-color: $primary;
            transform: translateY(-50%) scale(0.6);
        }

        input {
            margin-right: 24px;
            appearance: none;
        }
    }

    label.selected {
        border-color: $primary;

        &::after {
            display: block;
        }
    }
}

.reminder {
    margin-bottom: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
        margin-right: 32px;
    }

    p {
        font-size: 12px;
        line-height: 20px;
        opacity: 0.5;
    }
}

.creditCard {
    margin-bottom: 0;
}

@media screen and (hover:hover) {
    .paymentOptions label:hover {
        cursor: pointer;
    }
}

@media screen and (max-width:500px) {
    .paymentOptions .row div {
        margin-top: 0;
    }
}
</style>