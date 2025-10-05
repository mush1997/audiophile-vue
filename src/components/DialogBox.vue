<script setup>
import MainButton from '@/components/MainButton.vue'
import { useDialogStore } from '@/stores/dialog'
import { storeToRefs } from 'pinia'
import { useTemplateRef, onMounted } from 'vue'

const dialogStore = useDialogStore()
const { showDialog, dialogMsg } = storeToRefs(dialogStore)
const { closeDialog } = dialogStore
const msgBox = useTemplateRef('msgBox')
const closeDialogBtn = useTemplateRef('closeDialogBtn')

onMounted(() => {
    msgBox.value.style.top = (window.innerHeight - msgBox.value.clientHeight) / 2 + window.scrollY + "px"
    closeDialogBtn.value.btn.focus()
})
</script>

<template>
    <Teleport to="body">
        <div class="popup" :class="{ 'show': showDialog }" ref="msgBox">
            <p>{{ dialogMsg }}</p>
            <div>
                <MainButton @click="closeDialog" ref="closeDialogBtn">Close</MainButton>
            </div>
        </div>
    </Teleport>
</template>

<style lang="scss" scoped>
.popup {
    padding: 20px;
    width: 40%;
    min-width: 450px;
    max-width: 550px;
    border-radius: 10px;
    background-color: $white;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: 20;
    display: none;

    div {
        text-align: right;

        button {
            margin-top: 24px;
            width: 72px;
            height: 32px;

            &:focus {
                outline: none;
            }
        }
    }
}

.show {
    display: block;
    animation: showing 0.4s forwards;
}

@media screen and (max-width: 1024px) {
    .popup {
        min-width: 400px;
    }
}

@media screen and (max-width: 500px) {
    .popup {
        width: calc(100% - 48px);
        min-width: auto;
    }
}
</style>