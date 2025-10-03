import { defineStore, storeToRefs } from 'pinia'
import { useShadowStore } from '@/stores/shadow'
import { useLocalStorage } from '@vueuse/core'
import { ref, computed, readonly } from 'vue'

export const useCartStore = defineStore('cart', () => {
  const shadowStore = useShadowStore()
  const { cartShadow } = storeToRefs(shadowStore)
  const { prohibitTab } = shadowStore

  const cartList = useLocalStorage('cartList', [])
  const hideCart = ref(true)
  const emptyCart = computed(() => cartList.value.length === 0)
  const total = computed(() => cartList.value.map(item => item.price * item.amount).reduce((pre, next) => pre + next, 0))
  const shipping = ref(50)
  const vat = computed(() => Math.round(total.value * 0.2))
  const grandTotal = computed(() => Math.round(total.value * 1.2 + shipping.value))

  function showHideCart() {
    hideCart.value = false
    cartShadow.value = true
    document.addEventListener("keydown", prohibitTab)

    document.querySelector(".shadow").addEventListener("click", () => {
      hideCart.value = true
      cartShadow.value = false
      document.removeEventListener("keydown", prohibitTab)
    }, { once: true })
  }

  function $reset() {
    cartList.value = []
  }

  return { cartList: readonly(cartList), hideCart, emptyCart, total, shipping, vat, grandTotal, showHideCart, $reset }
})