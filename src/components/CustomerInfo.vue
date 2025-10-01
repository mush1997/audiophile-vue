<script setup>
import TextInput from '@/components/TextInput.vue'
import { useFormValidation } from '@/composables/useFormValidation'
import { ref } from 'vue'

const { checkInputValue } = useFormValidation()
const nameField = ref({ empty: false, invalid: false })
const emailField = ref({ empty: false, invalid: false })
const phoneNumberField = ref({ empty: false, invalid: false })
</script>

<template>
    <div class="fieldSet">
        <p class="fieldTitle">Billing details</p>
        <div class="row">
            <TextInput name="name" inputTitle="Name" placeholder="e.g. Alexei Ward" :field="nameField"
                @checkInput="checkInputValue" />
            <TextInput name="email" inputTitle="Email" placeholder="e.g. alexei@mail.com" :field="emailField"
                @checkInput="checkInputValue" />
        </div>
        <div class="row">
            <TextInput name="phoneNumber" inputTitle="Phone Number" placeholder="e.g. 12025550136"
                :field="phoneNumberField" @checkInput="checkInputValue" />
        </div>
    </div>
</template>

<style lang="scss" scoped></style>