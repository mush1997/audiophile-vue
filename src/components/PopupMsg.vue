<script setup>
import MainButton from '@/components/MainButton.vue'
import { useTemplateRef, ref, onMounted } from 'vue'
import { useEventListener } from '@vueuse/core'

const { msg } = defineProps(['msg'])
const msgBox = useTemplateRef(msgBox)
const closeBtn = useTemplateRef(closeBtn)
const closed = ref(false)

// document.body.classList.add("alertShadow");

function closePopupMsg() {
    // document.body.classList.remove("alertShadow");
    // document.body.classList.contains("cartShadow") ? "" : document.removeEventListener("keydown", prohibitTab);
    closed.value = true
}

useEventListener(window, "keydown", (event) => {
    event.key === "Tab" ? event.preventDefault() : "";
})

onMounted(() => {
    msgBox.value.style.top = window.innerHeight - msgBox.clientHeight / 2 + window.scrollY
    closeBtn.value.focus()
})
</script>

<template>
    <div class="popup" v-if="!closed" ref="msgBox">
        <p>{{ msg }}</p>
        <div>
            <MainButton @click="closePopupMsg" ref="closeBtn">Close</MainButton>
        </div>
    </div>
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