<script setup>
import TextInput from '@/components/TextInput.vue'
import { useInputField } from '@/composables/useInputField'

const addressField = useInputField("address")
const ZIPcodeField = useInputField("ZIPcode")
const cityField = useInputField("city")
const countryField = useInputField("country")

// import { useFormValidation } from '@/composables/useFormValidation'
// import { ref } from 'vue'

// const { checkInputValue } = useFormValidation()
// const addressField = ref({ empty: false, invalid: false })
// const ZIPcodeField = ref({ empty: false, invalid: false })
// const cityField = ref({ empty: false, invalid: false })
// const countryField = ref({ empty: false, invalid: false })
</script>

<template>
    <div class="fieldSet">
        <p class="fieldTitle">Shipping info</p>
        <div class="row">
            <!-- <TextInput name="address" inputTitle="Address" placeholder="e.g. 1137 Williams Avenue" :field="addressField"
                @checkInput="checkInputValue" /> -->
            <TextInput name="address" inputTitle="Address" placeholder="e.g. 1137 Williams Avenue" :field="addressField"
                v-model="addressField.val" />
        </div>
        <div class="row">
            <!-- <TextInput name="ZIPcode" inputTitle="ZIP code" placeholder="e.g. 10001" :field="ZIPcodeField"
                @checkInput="checkInputValue" />
            <TextInput name="city" inputTitle="City" placeholder="e.g. New York" :field="cityField"
                @checkInput="checkInputValue" /> -->
            <TextInput name="ZIPcode" inputTitle="ZIP code" placeholder="e.g. 10001" :field="ZIPcodeField"
                v-model="ZIPcodeField.val" />
            <TextInput name="city" inputTitle="City" placeholder="e.g. New York" :field="cityField"
                v-model="cityField.val" />
        </div>
        <div class="row">
            <!-- <TextInput name="country" inputTitle="Country" placeholder="e.g. United States" :field="countryField"
                @checkInput="checkInputValue" /> -->
            <TextInput name="country" inputTitle="Country" placeholder="e.g. United States" :field="countryField"
                v-model="countryField.val" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.row:first-of-type div {
    flex-basis: 100%;
}
</style>