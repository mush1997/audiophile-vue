<script setup>
import { useFormValidation } from '@/composables/useFormValidation'
import { useTemplateRef, computed, onMounted, watchEffect } from 'vue'

const { name, inputTitle, placeholder, field, maxlength } = defineProps({
    name: { type: String, required: true },
    inputTitle: { type: String, required: true },
    placeholder: { type: String, required: true },
    maxlength: { type: String, required: false },
    field: { type: Object, required: true }
})

const emit = defineEmits(['setTyped'])
const inputVal = defineModel()
const fieldDiv = useTemplateRef('fieldDiv')

const { formatCardNumber } = useFormValidation()
const isEmpty = computed(() => field.empty)
const isInvalid = computed(() => field.invalid)

function inputHandler(event) {
    if (name === 'cardNumber') {
        event.target.value = formatCardNumber(event.target.value)
        // emit('checkInput', name, event.target.value)
    }
}

onMounted(() => {
    watchEffect(() => {
        if (fieldDiv.value.classList.contains("isIgnored")) {
            console.log(123)
            emit('setTyped')
        }
    })
})
</script>

<template>
    <div :class="{ 'error': isEmpty || isInvalid }" class="field" ref="fieldDiv">
        <p>{{ inputTitle }}</p>
        <input type="text" :name :placeholder :maxlength autocomplete="off" @input="inputHandler" v-model="inputVal" />
        <p v-show="isEmpty" class="warning">Can't be blank</p>
        <p v-show="isInvalid" class="wrong">Wrong format</p>
    </div>
</template>

<style lang="scss" scoped>
.warning,
.wrong {
    font-size: 12px;
    color: $warning;
    position: absolute;
    top: 0;
    right: 0;
}

.error {
    p:first-child {
        color: $warning;
    }

    input {
        border-color: $warning;

        &:focus {
            border-color: $warning;
            caret-color: $warning;
        }
    }
}
</style>