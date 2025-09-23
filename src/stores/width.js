import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useWidthStore = defineStore('width', () => {
  const hideMenu = ref(true)
  const menuShadow = ref(false)
  const cartShadow = ref(false)
  const alertShadow = ref(false)

  function getInnerWidth() {
    if (window.innerWidth > 1024) {
      hideMenu.value = true
      menuShadow.value = false
    }
  }

  function prohibitTab(event) {
    console.log(event.key)
    event.key === "Tab" ? event.preventDefault() : ""
  }

  function showHideMenu() {
    hideMenu.value = false
    menuShadow.value = true
    document.addEventListener("keydown", prohibitTab)

    document.querySelector(".shadow").addEventListener("click", () => {
      hideMenu.value = true
      menuShadow.value = false
      document.removeEventListener("keydown", prohibitTab)
    }, { once: true })
  }

  return { hideMenu, menuShadow, cartShadow, alertShadow, getInnerWidth, prohibitTab, showHideMenu }
})