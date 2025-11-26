import { useCartStore } from '@/stores/cart'
import { useShadowStore } from '@/stores/shadow'
import { defineStore, storeToRefs } from 'pinia'
import { ref } from 'vue'

export const useModalStore = defineStore('modal', () => {
  const { resetCart } = useCartStore()
  const { modalShadow } = storeToRefs(useShadowStore())
  const showModal = ref(false)

  function showThankModal() {
    modalShadow.value = true
    showModal.value = true
  }

  function closeThankModal() {
    showModal.value = false
    modalShadow.value = false
    resetCart()
  }

  return { showModal, showThankModal, closeThankModal }
})