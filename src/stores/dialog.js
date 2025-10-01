import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useDialogStore = defineStore('dialog', () => {
  const dialogMsg = ref('')
  const showDialog = ref(false)

  function createDialog(msg) {
    dialogMsg.value = msg
    showDialog.value = true
  }

  return { dialogMsg, showDialog, createDialog }
})