import { useFormValidation } from '@/composables/useFormValidation'
import { ref, computed, watch } from 'vue'

export function useInputField(name) {
    const { checkFormat } = useFormValidation()

    const field = ref({
        nameAttr: name,
        val: '',
        typed: false,
        markAsTyped: () => { field.value.typed = true },
        invalid: computed(() => (field.value.typed ? !checkFormat(field.value.nameAttr, field.value.val) : false)),
        empty: computed(() => (field.value.typed ? field.value.val === '' : false))
    })

    watch(() => field.value.val, () => {
        field.value.markAsTyped()
        // field.value.typed = true
        console.log(field.value)
    }, { once: true })

    return { field }
}