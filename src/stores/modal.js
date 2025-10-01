import { ref } from 'vue'
import { defineStore, storeToRefs } from 'pinia'
import { useShadowStore } from './shadow'

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

  return { showModal, showThankModal }
})