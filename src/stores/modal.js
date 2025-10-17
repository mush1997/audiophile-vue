import { defineStore, storeToRefs } from 'pinia'
import { useCartStore } from '@/stores/cart'
import { useShadowStore } from '@/stores/shadow'
import { ref } from 'vue'

export const useModalStore = defineStore('modal', () => {
  const { resetCart } = useCartStore()
  const { modalShadow } = storeToRefs(useShadowStore())
  const showModal = ref(false)

  function showThankModal() {
    showModal.value = true
    modalShadow.value = true
  }

  function closeThankModal(finished) {
    if (!showModal.value) { return }
    if (finished) { resetCart() }
    showModal.value = false
    modalShadow.value = false
  }

  return { showModal, showThankModal, closeThankModal }
})