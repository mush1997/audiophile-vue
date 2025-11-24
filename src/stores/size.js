import { useMenuStore } from '@/stores/menu'
import { defineStore, storeToRefs } from 'pinia'
import { computed } from 'vue'

export const useSizeStore = defineStore('size', () => {
  const { width } = storeToRefs(useMenuStore())
  const picSize = computed(() => width.value > 1024 ? 'desktop' : width.value > 500 ? 'tablet' : 'mobile')

  return { picSize }
})