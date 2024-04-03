import { onMounted, ref } from 'vue'

export function useTitle(initialTitle: string) {
  const title = ref(initialTitle)
  const setTitle = (newTitle: string) => {
    title.value = newTitle
    document.title = newTitle
  }

  onMounted(() => setTitle(initialTitle))
}
