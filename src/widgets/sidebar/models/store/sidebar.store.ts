import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSidebarNavigationStore = defineStore('sidebar', () => {
  const isShowNavigationSidebar = ref<boolean>(false)

  function handleShowNavigationSidebar() {
    isShowNavigationSidebar.value = !isShowNavigationSidebar.value
  }

  return {
    isShowNavigationSidebar,
    handleShowNavigationSidebar
  }
})
