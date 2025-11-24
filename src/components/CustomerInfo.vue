<script setup>
import TextInput from '@/components/TextInput.vue'
import { useInputField } from '@/composables/useInputField'

const nameField = useInputField('name')
const emailField = useInputField('email')
const phoneNumberField = useInputField('phoneNumber')
</script>

<template>
    <div class="fieldSet">
        <p class="fieldTitle">Billing details</p>
        <div class="row">
            <TextInput name="name" inputTitle="Name" placeholder="e.g. Alexei Ward" :field="nameField"
                @setTyped="nameField.markAsTyped()" v-model="nameField.val" />
            <TextInput name="email" inputTitle="Email" placeholder="e.g. alexei@mail.com" :field="emailField"
                @setTyped="emailField.markAsTyped()" v-model="emailField.val" />
        </div>
        <div class="row">
            <TextInput name="phoneNumber" inputTitle="Phone Number" placeholder="e.g. 12025550136"
                :field="phoneNumberField" @setTyped="phoneNumberField.markAsTyped()" v-model="phoneNumberField.val" />
        </div>
    </div>
</template>