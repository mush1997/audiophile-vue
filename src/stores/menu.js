import { ref, watch } from 'vue'
import { defineStore, storeToRefs } from 'pinia'
import { useShadowStore } from './shadow'
import { usePicSize } from '@/composables/usePicSize'

export const useMenuStore = defineStore('menu', () => {
  const shadowStore = useShadowStore()
  const { menuShadow } = storeToRefs(shadowStore)
  const { prohibitTab } = shadowStore
  const { width } = usePicSize()
  const hideMenu = ref(true)

  function getInnerWidth() {
    if (width > 1024) {
      hideMenu.value = true
      menuShadow.value = false
    }
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

  watch(width, getInnerWidth, { immediate: true })

  return { hideMenu, getInnerWidth, showHideMenu }
})