<script setup>
import MainButton from '@/components/MainButton.vue'
import { useDialog } from '@/composables/useDialog'
import { useModalStore } from '@/stores/modal'
import { useCartStore } from '@/stores/cart'
import { storeToRefs } from 'pinia'
import { defineAsyncComponent } from 'vue'

const ThankModal = defineAsyncComponent(() => import('@/components/ThankModal.vue'))
const DialogBox = defineAsyncComponent(() => import('@/components/DialogBox.vue'))

const { dialogMsg, showDialog, createDialog, closeDialog } = useDialog()
const modalStore = useModalStore()
const { showModal } = storeToRefs(modalStore)
const { showThankModal } = useModalStore()
const { total, shipping, VAT, grandTotal } = storeToRefs(useCartStore())

function validateForm() {
    const textInputs = Array.from(document.querySelectorAll(".field"))
    const blanks = textInputs.filter(textInput => !textInput.classList.contains("error") && textInput.closest(".fieldSet").style.display !== "none" && textInput.querySelector("input").value === "")
    console.log(blanks)

    if (blanks.length === 0 && !document.querySelectorAll(".error")) {
        showThankModal()
        return
    }

    if (blanks.length > 0) {
        blanks.forEach(blank => {
            blank.classList.add("isIgnored")
            // blank.classList.add("error")
            // blank.querySelector(".warning").style.display = "block"
        })

        createDialog('Please make sure that you fill in all the blanks in the correct format.')
    }
}
</script>

<template>
    <div class="notes">
        <p><span>Total</span><span class="finalTotal">$ {{ total.toLocaleString() }}</span></p>
        <p><span>Shipping</span><span class="shippingFee">$ {{ shipping.toLocaleString() }}</span></p>
        <p><span>VAT(20%)</span><span class="vat">$ {{ VAT.toLocaleString() }}</span></p>
        <p><span>Grand total</span><span class="grandTotal">$ {{ grandTotal.toLocaleString() }}</span></p>
        <MainButton @click.prevent="validateForm">Continue & pay</MainButton>
    </div>
    <ThankModal v-if="showModal" />
    <DialogBox v-if="showDialog" @closeMsgBox="closeDialog" :dialogMsg />
</template>

<style lang="scss" scoped>
.notes {
    margin-top: 32px;

    p {
        margin-bottom: 8px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        span:first-child {
            text-transform: uppercase;
            opacity: 0.5;
        }

        span:last-child {
            font-size: 18px;
            font-weight: bold;
        }

        .grandTotal {
            color: $primary;
        }
    }

    p:nth-child(3) {
        margin-bottom: 24px;
    }

    p:nth-child(4) {
        margin-bottom: 0;
    }

    button {
        margin-top: 32px;
        width: 100%;
    }
}

@media screen and (max-width:1024px) {
    .notes {
        text-align: center;

        button {
            max-width: 380px;
        }
    }
}

@media screen and (max-width:500px) {
    .notes button {
        height: 40px;
    }
}
</style>