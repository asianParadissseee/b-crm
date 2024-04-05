import { defineStore } from 'pinia'
import { Ref, ref } from 'vue'

export const useSidebarNavigationStore = defineStore('sidebar-navigation', () => {
  const isShowNavigationSidebar: Ref<boolean> = ref(false)

  function handleShowNavigationSidebar(): void {
    console.log('open sidebar')
    isShowNavigationSidebar.value = !isShowNavigationSidebar.value
  }

  return {
    isShowNavigationSidebar,
    handleShowNavigationSidebar
  }
})
