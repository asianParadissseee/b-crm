import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSidebarCategoryStore = defineStore('sidebar', () => {
  const isShowCategorySidebar = ref<boolean>(false)

  function handleShowCategorySidebar() {
    isShowCategorySidebar.value = !isShowCategorySidebar.value
  }

  return {
    isShowCategorySidebar,
    handleShowCategorySidebar
  }
})
