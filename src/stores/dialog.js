import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useDialogStore = defineStore('dialog', () => {
  const dialogMsg = ref('')
  const showDialog = ref(false)

  function createDialog(msg) {
    dialogMsg.value = msg
    showDialog.value = true
  }

  return { dialogMsg, showDialog, createDialog }
})