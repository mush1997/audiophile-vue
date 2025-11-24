import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'
import { ref, computed, readonly } from 'vue'

export const useCartStore = defineStore('cart', () => {
  const cartList = useLocalStorage('cartList', [])
  const hideCart = ref(true)
  const emptyCart = computed(() => cartList.value.length === 0)
  const total = computed(() => cartList.value.map(item => item.price * item.amount).reduce((pre, next) => pre + next, 0))
  const shipping = ref(50)
  const VAT = computed(() => Math.round(total.value * 0.2))
  const grandTotal = computed(() => Math.round(total.value * 1.2) + shipping.value)

  function addItem(newItem, quantity) {
    const index = cartList.value.findIndex(item => item['name'] === newItem.name)
    index < 0 ? cartList.value.push(newItem) : cartList.value[index]['amount'] += quantity
  }

  function plusItem(itemName, itemAmount) {
    cartList.value.find(item => item['name'] === itemName)['amount'] = itemAmount + 1
  }

  function minusItem(itemName, itemAmount) {
    cartList.value.find(item => item['name'] === itemName)['amount'] = itemAmount - 1
  }

  function removeItem(itemName) {
    const index = cartList.value.findIndex(item => item['name'] === itemName)
    cartList.value.splice(index, 1)
  }

  function resetCart() {
    cartList.value = []
  }

  return { cartList: readonly(cartList), hideCart, emptyCart, total, shipping, VAT, grandTotal, addItem, plusItem, minusItem, removeItem, resetCart }
})