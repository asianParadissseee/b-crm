<script setup lang="ts">
import AppModal from '@/shared/ui/app-modal.vue'
import { useOpenModal } from '@/app/providers/store'
import { storeToRefs } from 'pinia'

const isOpenModalStore = useOpenModal()
const { handleShowModal } = isOpenModalStore
const { isOpenModal } = storeToRefs(isOpenModalStore)
</script>

<template>
  <app-modal
    :handle-show-modal="handleShowModal"
    :is-open-modal="isOpenModal"
  >
    fsddsf
  </app-modal>
</template>

<style scoped lang="scss"></style>
