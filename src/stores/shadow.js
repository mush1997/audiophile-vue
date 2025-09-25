import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useShadowStore = defineStore('shadow', () => {
  const menuShadow = ref(false)
  const cartShadow = ref(false)
  const alertShadow = ref(false)

  return { menuShadow, cartShadow, alertShadow }
})