import { ref, watch } from 'vue'
// import { useEventListener } from '@vueuse/core'
import { createSharedComposable, useWindowSize } from '@vueuse/core'

export function usePicSize() {
  const picSize = ref("")
  const useSharedWindowSize = createSharedComposable(useWindowSize)
  const { width } = useSharedWindowSize()

  function updatePicSize() {
    if (width > 1024) {
      picSize.value = "desktop"
    } else if (width > 500) {
      picSize.value = "tablet"
    } else {
      picSize.value = "mobile"
    }
  }

  // useEventListener(window, "resize", updatePicSize)

  watch(width, updatePicSize, { immediate: true })

  return { picSize, width, updatePicSize }
}