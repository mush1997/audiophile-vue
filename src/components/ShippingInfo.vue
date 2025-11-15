<script setup>
import TextInput from '@/components/TextInput.vue'
import { useInputField } from '@/composables/useInputField'

const addressField = useInputField("address")
const ZIPcodeField = useInputField("ZIPcode")
const cityField = useInputField("city")
const countryField = useInputField("country")
</script>

<template>
    <div class="fieldSet">
        <p class="fieldTitle">Shipping info</p>
        <div class="row">
            <TextInput name="address" inputTitle="Address" placeholder="e.g. 1137 Williams Avenue" :field="addressField"
                @setTyped="addressField.markAsTyped()" v-model="addressField.val" />
        </div>
        <div class="row">
            <TextInput name="ZIPcode" inputTitle="ZIP code" placeholder="e.g. 10001" :field="ZIPcodeField"
                @setTyped="ZIPcodeField.markAsTyped()" v-model="ZIPcodeField.val" />
            <TextInput name="city" inputTitle="City" placeholder="e.g. New York" :field="cityField"
                @setTyped="cityField.markAsTyped()" v-model="cityField.val" />
        </div>
        <div class="row">
            <TextInput name="country" inputTitle="Country" placeholder="e.g. United States" :field="countryField"
                @setTyped="countryField.markAsTyped()" v-model="countryField.val" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.row:first-of-type div {
    flex-basis: 100%;
}
</style>