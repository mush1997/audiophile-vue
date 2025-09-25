// import { ref } from 'vue'
import { defineStore, storeToRefs } from 'pinia'
import { useShadowStore } from './shadow'

export const useCartStore = defineStore('cart', () => {
  const { cartShadow } = storeToRefs(useShadowStore())

  // return { cartShadow }
})
