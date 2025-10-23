import { useShadowStore } from '@/stores/shadow'
import { defineStore, storeToRefs } from 'pinia'
import { useWindowSize } from '@vueuse/core'
import { computed, ref, watchEffect } from 'vue'

export const useMenuStore = defineStore('menu', () => {
  const shadowStore = useShadowStore()
  const { menuShadow } = storeToRefs(shadowStore)
  const { hideShadow } = shadowStore
  const { width } = useWindowSize()
  const isDesktop = computed(() => width.value > 1024)
  const hideMenu = ref(true)

  function checkDeviceWidth() {
    if (isDesktop.value) {
      hideShadow(hideMenu, menuShadow)
    }
  }

  watchEffect(checkDeviceWidth)

  return { width, hideMenu }
})