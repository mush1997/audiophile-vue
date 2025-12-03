<script setup>
import { useMutationObserver } from '@vueuse/core'
import { useTemplateRef, computed } from 'vue'

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
const isEmpty = computed(() => field.empty)
const isInvalid = computed(() => field.invalid)

useMutationObserver(fieldDiv, (mutation) => {
    if (mutation[0].target.dataset.ignored === 'true') {
        emit('setTyped')
    }
}, { attributes: true, attributeFilter: ['data-ignored'] })
</script>

<template>
    <div :class="{ 'error': isEmpty || isInvalid }" class="field" ref="fieldDiv">
        <p>{{ inputTitle }}</p>
        <input type="text" :name :placeholder :maxlength autocomplete="off" v-model="inputVal" />
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

.field.error {
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