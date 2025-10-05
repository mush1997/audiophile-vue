import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useShadowStore = defineStore('shadow', () => {
  const menuShadow = ref(false)
  const cartShadow = ref(false)
  const alertShadow = ref(false)
  const modalShadow = ref(false)

  function prohibitTab(event) {
    event.key === "Tab" ? event.preventDefault() : ""
  }

  function showHideToggle(hideState, shadow) {
    hideState.value = false
    shadow.value = true
    document.addEventListener("keydown", prohibitTab)

    document.querySelector(".shadow").addEventListener("click", () => {
      hideState.value = true
      shadow.value = false
      document.removeEventListener("keydown", prohibitTab)
    }, { once: true })
  }

  return { menuShadow, cartShadow, alertShadow, modalShadow, prohibitTab, showHideToggle }
})