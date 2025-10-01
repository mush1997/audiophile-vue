import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useShadowStore = defineStore('shadow', () => {
  const menuShadow = ref(false)
  const cartShadow = ref(false)
  const alertShadow = ref(false)
  const modalShadow = ref(false)

  function prohibitTab(event) {
    event.key === "Tab" ? event.preventDefault() : ""
  }

  return { menuShadow, cartShadow, alertShadow, modalShadow, prohibitTab }
})