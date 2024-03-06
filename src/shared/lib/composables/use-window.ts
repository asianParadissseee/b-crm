import { onMounted, onBeforeUnmount, ref } from 'vue'

export function useWindowSize(size: number) {
  const isResponsive = ref(false)

  const checkWindowSize = () => {
    isResponsive.value = window.innerWidth <= size
  }

  onMounted(() => {
    checkWindowSize()
    window.addEventListener('resize', checkWindowSize)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', checkWindowSize)
  })

  return { isResponsive }
}
