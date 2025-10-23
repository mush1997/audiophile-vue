import { useShadowStore } from '@/stores/shadow'
import { storeToRefs } from 'pinia'
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
    showDialog.value = false
    alertShadow.value = false
    dialogMsg.value = ''
  }

  return { dialogMsg, showDialog, createDialog, closeDialog }
}