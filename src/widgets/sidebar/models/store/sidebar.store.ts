import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSidebarStore = defineStore("sidebar", ()=>{
  const isShowSidebar = ref<boolean>(false)

  function handleShowSidebar(){
    isShowSidebar.value = !isShowSidebar.value
  }

  return {
    isShowSidebar,
    handleShowSidebar
  }
})