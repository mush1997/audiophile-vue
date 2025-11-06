<script setup>
import TextInput from '@/components/TextInput.vue'
import { useInputField } from '@/composables/useInputField'
// import { useFormValidation } from '@/composables/useFormValidation'

const nameField = useInputField("name")
const emailField = useInputField("email")
const phoneNumberField = useInputField("phoneNumber")
// const { checkFormat } = useFormValidation()
// const nameField = ref({ empty: false, invalid: false, val: '' })
// const emailField = ref({ empty: false, invalid: false, val: '' })
// const phoneNumberField = ref({ empty: false, invalid: false, val: '' })
</script>

<template>
    <div class="fieldSet">
        <p class="fieldTitle">Billing details</p>
        <div class="row">
            <!-- <TextInput name="name" inputTitle="Name" placeholder="e.g. Alexei Ward" :field="nameField"
                @checkInput="checkInputValue" />
            <TextInput name="email" inputTitle="Email" placeholder="e.g. alexei@mail.com" :field="emailField"
                @checkInput="checkInputValue" /> -->
            <TextInput name="name" inputTitle="Name" placeholder="e.g. Alexei Ward" :field="nameField"
                v-model="nameField.val" />
            <TextInput name="email" inputTitle="Email" placeholder="e.g. alexei@mail.com" :field="emailField"
                v-model="emailField.val" />
        </div>
        <div class="row">
            <!-- <TextInput name="phoneNumber" inputTitle="Phone Number" placeholder="e.g. 12025550136"
                :field="phoneNumberField" @checkInput="checkInputValue" /> -->
            <TextInput name="phoneNumber" inputTitle="Phone Number" placeholder="e.g. 12025550136"
                :field="phoneNumberField" v-model="phoneNumberField.val" />
        </div>
    </div>
</template>