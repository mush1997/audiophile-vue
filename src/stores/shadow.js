import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useShadowStore = defineStore('shadow', () => {
  const menuShadow = ref(false)
  const cartShadow = ref(false)
  const alertShadow = ref(false)
  const modalShadow = ref(false)

  const listenerNotes = new Map()

  function prohibitTab(event) {
    // console.log(event.key)
    if (event.key === "Tab") { event.preventDefault() }
  }

  function prohibitTabOn() {
    if (!listenerNotes.has('keydownFn')) {
      document.addEventListener("keydown", prohibitTab)
      listenerNotes.set('keydownFn', prohibitTab)
    }
  }

  function prohibitTabOff() {
    if (listenerNotes.has('keydownFn')) {
      document.removeEventListener("keydown", prohibitTab)
      listenerNotes.delete('keydownFn')
    }
  }

  function hideShadow(hideState, shadow, clicked = false) {
    const fn = listenerNotes.get('clickFn')

    if (fn && clicked) {
      prohibitTabOff()
      listenerNotes.delete('clickFn')
      hideState.value = true
      shadow.value = false
    }

    if (fn && !clicked && shadow.value) {
      prohibitTabOff()
      document.querySelector(".shadow").removeEventListener("click", fn)
      listenerNotes.delete('clickFn')
      hideState.value = true
      shadow.value = false
    }
  }

  function showHideToggle(hideState, shadow) {
    hideState.value = false
    shadow.value = true
    prohibitTabOn()

    const fn = hideShadow.bind(null, hideState, shadow, true)
    listenerNotes.set('clickFn', fn)
    document.querySelector(".shadow").addEventListener("click", fn, { once: true })
  }

  return { menuShadow, cartShadow, alertShadow, modalShadow, prohibitTab, hideShadow, showHideToggle }
})