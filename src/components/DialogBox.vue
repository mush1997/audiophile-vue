<script setup>
import MainButton from '@/components/MainButton.vue'
import { useShadowStore } from '@/stores/shadow'
import { useDialogStore } from '@/stores/dialog'
import { storeToRefs } from 'pinia'
import { useTemplateRef, onMounted } from 'vue'

// const { msg } = defineProps(['msg'])
// const emit = defineEmits(['closeDialog'])

const shadowStore = useShadowStore()
const { alertShadow, cartShadow } = storeToRefs(shadowStore)
const { prohibitTab } = shadowStore
const dialogStore = useDialogStore()
const { dialogMsg, showDialog } = storeToRefs(dialogStore)

const msgBox = useTemplateRef('msgBox')
const closeBtn = useTemplateRef('closeBtn')

function closeDialog() {
    msgBox.value.classList.remove("show")
    alertShadow.value = false
    showDialog.value = false
    dialogMsg.value = ''
    cartShadow.value ? "" : document.removeEventListener("keydown", prohibitTab)
    // emit('closeDialog')
}

onMounted(() => {
    msgBox.value.style.top = (window.innerHeight - msgBox.value.clientHeight) / 2 + window.scrollY + "px"
    msgBox.value.classList.add("show")
    alertShadow.value = true
    document.addEventListener("keydown", prohibitTab)
    closeBtn.value.btn.focus()
})
</script>

<template>
    <Teleport to="body">
        <div class="popup" ref="msgBox">
            <!-- <p>{{ msg }}</p> -->
            <p>{{ dialogMsg }}</p>
            <div>
                <MainButton @click="closeDialog" ref="closeBtn">Close</MainButton>
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