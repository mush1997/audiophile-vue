import { storeToRefs } from 'pinia'
import { useShadowStore } from '@/stores/shadow'
import { ref } from 'vue'

export function useDialog() {
  const { alertShadow } = storeToRefs(useShadowStore())
  const dialogMsg = ref('')
  const showDialog = ref(false)

  function createDialog(msg) {
    dialogMsg.value = msg
    alertShadow.value = true
    showDialog.value = true
  }

  function closeDialog() {
    if (!showDialog.value) { return }
    dialogMsg.value = ''
    alertShadow.value = false
    showDialog.value = false
  }

  return { dialogMsg, showDialog, createDialog, closeDialog }
}