<script setup>
import { useFormValidation } from '@/composables/useFormValidation'
import { computed } from 'vue'

const { name, inputTitle, placeholder, field, maxlength } = defineProps({
    name: { type: String, required: true },
    inputTitle: { type: String, required: true },
    placeholder: { type: String, required: true },
    field: { type: Object, required: true },
    maxlength: { type: String, required: false }
})

const emit = defineEmits(['checkInput'])

const { formatCardNumber } = useFormValidation()
const isEmpty = computed(() => field.empty)
const isInvalid = computed(() => field.invalid)

function inputHandler(event) {
    if (name === 'cardNumber') { event.target.value = formatCardNumber(event.target.value) }
    emit('checkInput', event.target.value, field, name)
}
</script>

<template>
    <div :class="{ 'error': isEmpty || isInvalid }" class="field">
        <p>{{ inputTitle }}</p>
        <input type="text" :name :placeholder :maxlength autocomplete="off" @input="inputHandler" />
        <p v-show="isEmpty" class="warning">Can't be blank</p>
        <p v-show="isInvalid && !isEmpty" class="wrong">Wrong format</p>
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