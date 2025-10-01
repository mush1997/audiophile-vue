import { ref, computed } from 'vue'
import { defineStore, storeToRefs } from 'pinia'
import { useShadowStore } from './shadow'
import { useLocalStorage } from "@vueuse/core";

export const useCartStore = defineStore('cart', () => {
  const shadowStore = useShadowStore()
  const { cartShadow } = storeToRefs(shadowStore)
  const { prohibitTab } = shadowStore

  const hideCart = ref(true)
  const cartList = useLocalStorage('cartList', [])
  const total = computed(() => cartList.map(item => item.price * item.amount).reduce((pre, next) => pre + next))
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

  return { cartList, hideCart, total, shipping, vat, grandTotal, showHideCart }
})