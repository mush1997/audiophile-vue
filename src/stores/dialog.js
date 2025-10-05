import { defineStore, storeToRefs } from 'pinia'
import { useShadowStore } from '@/stores/shadow'
import { ref } from 'vue'

export const useDialogStore = defineStore('dialog', () => {
  const shadowStore = useShadowStore()
  const { alertShadow, cartShadow } = storeToRefs(shadowStore)
  const { prohibitTab } = shadowStore
  const showDialog = ref(false)
  const dialogMsg = ref('')

  function createDialog(msg) {
    dialogMsg.value = msg
    showDialog.value = true
    alertShadow.value = true
    document.addEventListener("keydown", prohibitTab)
  }

  function closeDialog() {
    showDialog.value = false
    alertShadow.value = false
    dialogMsg.value = ''

    if (!cartShadow.value) {
      document.removeEventListener("keydown", prohibitTab)
    }
  }

  return { showDialog, dialogMsg, createDialog, closeDialog }
})