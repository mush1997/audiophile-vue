import { defineStore } from 'pinia'
import axios from 'axios'
import { ref } from 'vue'

export const useDataStore = defineStore('data', () => {
  const productData = ref([])
  const finished = ref(false)

  async function getProductsData() {
    try {
      const response = await axios.get("/data.json")
      productData.value = response.data
      finished.value = true
    } catch (error) {
      console.log(error)
    }
  }

  return { productData, finished, getProductsData }
})