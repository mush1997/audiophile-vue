import { defineStore, storeToRefs } from 'pinia'
import { useShadowStore } from '@/stores/shadow'
import { useWindowSize } from '@vueuse/core'
import { computed, ref, watchEffect } from 'vue'

export const useMenuStore = defineStore('menu', () => {
  const shadowStore = useShadowStore()
  const { menuShadow } = storeToRefs(shadowStore)
  const { prohibitTab } = shadowStore
  const { width } = useWindowSize()
  const isDesktop = computed(() => width.value > 1024)
  const hideMenu = ref(true)

  function checkDevice() {
    if (isDesktop.value) {
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

  watchEffect(checkDevice)

  return { width, hideMenu, showHideMenu }
})