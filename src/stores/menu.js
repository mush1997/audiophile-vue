import { defineStore, storeToRefs } from 'pinia'
import { useShadowStore } from '@/stores/shadow'
import { useWindowSize } from '@vueuse/core'
import { computed, ref, watchEffect } from 'vue'

export const useMenuStore = defineStore('menu', () => {
  const shadowStore = useShadowStore()
  const { menuShadow } = storeToRefs(shadowStore)
  const { showHideToggle } = shadowStore
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
    showHideToggle(hideMenu, menuShadow)
  }

  watchEffect(checkDevice)

  return { width, hideMenu, showHideMenu }
})