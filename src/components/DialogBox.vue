<script setup>
import MainButton from '@/components/MainButton.vue'
import { useShadowStore } from '@/stores/shadow'
import { useMenuStore } from '@/stores/menu'
import { storeToRefs } from 'pinia'
import { useTemplateRef, onMounted } from 'vue'

const { msg } = defineProps(['msg'])
const emit = defineEmits(['closeDialog'])

const { alertShadow, cartShadow } = storeToRefs(useShadowStore())
const { prohibitTab } = useMenuStore()

const msgBox = useTemplateRef('msgBox')
const closeBtn = useTemplateRef('closeBtn')

function closeDialogBox() {
    alertShadow.value = false
    cartShadow.value ? "" : document.removeEventListener("keydown", prohibitTab)
    emit('closeDialog')
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
            <p>{{ msg }}</p>
            <div>
                <MainButton @click="closeDialogBox" ref="closeBtn">Close</MainButton>
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
    visibility: hidden;

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
    visibility: visible;
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