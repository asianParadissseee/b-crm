import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCurrentPageStore = defineStore('current-contacts', () => {
  const currentPage = ref(1)

  function setCurrentPage(page: number): void {
    currentPage.value = page
  }
  return {
    currentPage,
    setCurrentPage
  }
})
