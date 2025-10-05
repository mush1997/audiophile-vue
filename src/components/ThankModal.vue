<script setup>
import SummaryBrick from './SummaryBrick.vue'
import MainButton from '@/components/MainButton.vue'
import { useModalStore } from '@/stores/modal'
import { storeToRefs } from 'pinia'
import { useTemplateRef, onMounted } from 'vue'

const modalStore = useModalStore()
const { showModal } = storeToRefs(modalStore)
const { closeThankModal } = modalStore
const thankModal = useTemplateRef('thankModal')
const closeModalBtn = useTemplateRef('closeModalBtn')

onMounted(() => {
    thankModal.value.style.top = (window.innerHeight - thankModal.value.clientHeight) / 2 + window.scrollY + "px"
    closeModalBtn.value.btn.focus()
})
</script>

<template>
    <Teleport to="body">
        <section class="thankModal" :class="{ 'show': showModal }" ref="thankModal">
            <img src="@/assets/checkout/icon-order-confirmation.svg" alt="">
            <h2>Thank you for your order</h2>
            <p>You will receive an email confirmation shortly.</p>
            <SummaryBrick />
            <MainButton @click="closeThankModal" ref="closeModalBtn">Back to home</MainButton>
        </section>
    </Teleport>
</template>

<style lang="scss" scoped>
.thankModal {
    padding: 48px;
    width: 40%;
    min-width: 620px;
    max-width: 720px;
    max-height: calc(100vh - 80px);
    overflow-y: auto;
    overscroll-behavior: none;
    border-radius: 10px;
    background-color: $white;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
    display: none;

    &>img {
        margin-bottom: 32px;
    }

    h2 {
        font-size: 32px;
        line-height: 36px;
        letter-spacing: 1.15px;
    }

    &>p {
        margin: 24px 0 32px 0;
        opacity: 0.5;
    }

    button {
        width: 100%;
    }
}

.show {
    display: block;
    animation: showing 0.8s forwards;
}

@media screen and (max-width:1024px) {
    .thankModal {
        padding: 28px;
        min-width: 580px;
    }
}

@media screen and (max-width:680px) {
    .thankModal {
        width: calc(100% - 80px);
        min-width: auto;
        max-width: auto;

        &>img {
            margin-bottom: 24px;
        }

        h2 {
            font-size: 28px;
        }

        &>p {
            margin: 16px 0 24px 0;
        }
    }
}

@media screen and (max-width:500px) {
    .thankModal {
        padding: 24px;

        &>img {
            margin-bottom: 16px;
        }

        &>p {
            margin: 12px 0 16px 0;
        }

        button {
            margin-top: 24px;
        }
    }
}

@media screen and (max-width:400px) {
    .thankModal {
        padding: 20px;
    }
}
</style>