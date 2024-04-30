import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCurrentOfficeStore = defineStore('current-office', () => {
  const currentOfficePage = ref(1)

  function setCurrentOfficePage(page: number): void {
    currentOfficePage.value = page
  }

  return {
    currentOfficePage,
    setCurrentOfficePage
  }
})
