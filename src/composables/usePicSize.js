import { ref } from 'vue'
import { useEventListener } from '@vueuse/core'

export function usePicSize() {
  const picSize = ref("")

  function updatePicSize() {
    if (window.innerWidth > 1024) {
      picSize.value = "desktop"
    } else if (window.innerWidth > 500) {
      picSize.value = "tablet"
    } else {
      picSize.value = "mobile"
    }
    // console.log(picSize.value)
  }

  useEventListener(window, "resize", updatePicSize)

  return { picSize, updatePicSize }
}