import { defineStore, storeToRefs } from 'pinia'
import { useShadowStore } from '@/stores/shadow'
import { useCartStore } from '@/stores/cart'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

export const useModalStore = defineStore('modal', () => {
  const shadowStore = useShadowStore()
  const { modalShadow } = storeToRefs(shadowStore)
  const { prohibitTab } = shadowStore
  const showModal = ref(false)

  function showThankModal() {
    showModal.value = true
    modalShadow.value = true
    document.addEventListener("keydown", prohibitTab)
  }

  function closeThankModal() {
    showModal.value = false
    modalShadow.value = false
    document.removeEventListener("keydown", prohibitTab)
    document.querySelector("form").reset()
    useCartStore().$reset()
    useRouter().push({ path: '/' }).catch(error => error)
  }

  return { showModal, showThankModal, closeThankModal }
})