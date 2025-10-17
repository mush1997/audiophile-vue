<script setup>
import MainButton from '@/components/MainButton.vue'
import { useShadowStore } from '@/stores/shadow'
import { useTemplateRef, onMounted, onBeforeUnmount } from 'vue'

const { dialogMsg } = defineProps(['dialogMsg'])
const emit = defineEmits(['closeMsgBox'])
const { prohibitTab } = useShadowStore()
const closeMsgBtn = useTemplateRef('closeMsgBtn')

onMounted(() => {
    document.addEventListener("keydown", prohibitTab)
    closeMsgBtn.value.btn.focus()
})

onBeforeUnmount(() => {
    document.removeEventListener("keydown", prohibitTab)
    emit('closeMsgBox')
})
</script>

<template>
    <Teleport to="body">
        <div class="popup" :class="{ 'show': dialogMsg.length > 0 }">
            <p>{{ dialogMsg }}</p>
            <div>
                <MainButton @click="$emit('closeMsgBox')" ref="closeMsgBtn">Close</MainButton>
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
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
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