import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useShadowStore = defineStore('shadow', () => {
  const menuShadow = ref(false)
  const cartShadow = ref(false)
  const alertShadow = ref(false)
  const modalShadow = ref(false)
  const listenerNotes = new Map()

  function prohibitTab(event) {
    if (event.key === 'Tab') { event.preventDefault() }
  }

  function prohibitTabOn() {
    if (!listenerNotes.has('keydownFn')) {
      document.addEventListener('keydown', prohibitTab)
      listenerNotes.set('keydownFn', prohibitTab)
    }
  }

  function prohibitTabOff() {
    if (listenerNotes.has('keydownFn')) {
      document.removeEventListener('keydown', prohibitTab)
      listenerNotes.delete('keydownFn')
    }
  }

  function showHideToggle(hideState, shadow) {
    // the default state is hidden and shadow is invisible --> reverse the values of both
    shadow.value = true
    hideState.value = false
    prohibitTabOn()

    // add a click event listener to '.shadow' for hiding & record its callbackFn in 'listenerNotes'
    const fn = hideShadow.bind(null, hideState, shadow, true)
    listenerNotes.set('clickFn', fn)
    document.querySelector('.shadow').addEventListener('click', fn, { once: true })
  }

  function hideShadow(hideState, shadow, clicked = false) {
    const fn = listenerNotes.get('clickFn')

    // when this function is called by clicking --> reset everything
    if (fn && clicked) {
      prohibitTabOff()
      listenerNotes.delete('clickFn')
      hideState.value = true
      shadow.value = false
    }

    /* when this function is NOT called by clicking and the shadow is visible --> reset everything & manually remove the click event listener
       (eg. the <MenuList /> under <HamburgerMenu /> is shown and then user resizes the window from 'mobile' mode to 'desktop' mode) */
    if (fn && !clicked && shadow.value) {
      prohibitTabOff()
      document.querySelector('.shadow').removeEventListener('click', fn)
      listenerNotes.delete('clickFn')
      hideState.value = true
      shadow.value = false
    }
  }

  return { menuShadow, cartShadow, alertShadow, modalShadow, prohibitTab, showHideToggle, hideShadow }
})