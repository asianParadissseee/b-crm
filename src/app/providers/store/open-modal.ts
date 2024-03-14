import { defineStore } from 'pinia'
import { Ref, ref } from 'vue'

export const useOpenModal = defineStore('open-modal', () => {
  const isOpenModal: Ref<boolean> = ref(false)

  const handleShowModal = () => {
    console.log('open')
    isOpenModal.value = !isOpenModal.value
  }
  return {
    isOpenModal,
    handleShowModal
  }
})
