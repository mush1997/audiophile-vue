<script setup>
import TextInput from '@/components/TextInput.vue'
import { useFormValidation } from '@/composables/useFormValidation'
import { ref } from 'vue'

const { checkInputValue } = useFormValidation()
const addressField = ref({ empty: false, invalid: false })
const ZIPcodeField = ref({ empty: false, invalid: false })
const cityField = ref({ empty: false, invalid: false })
const countryField = ref({ empty: false, invalid: false })
</script>

<template>
    <div class="fieldSet">
        <p class="fieldTitle">Shipping info</p>
        <div class="row">
            <TextInput name="address" inputTitle="Address" placeholder="e.g. 1137 Williams Avenue" :field="addressField"
                @checkInput="checkInputValue" />
        </div>
        <div class="row">
            <TextInput name="ZIPcode" inputTitle="ZIP code" placeholder="e.g. 10001" :field="ZIPcodeField"
                @checkInput="checkInputValue" />
            <TextInput name="city" inputTitle="City" placeholder="e.g. New York" :field="cityField"
                @checkInput="checkInputValue" />
        </div>
        <div class="row">
            <TextInput name="country" inputTitle="Country" placeholder="e.g. United States" :field="countryField"
                @checkInput="checkInputValue" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.row:first-of-type div {
    flex-basis: 100%;
}
</style>