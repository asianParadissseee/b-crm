<script setup lang="ts">
import { useOpenModal } from '@/app/providers/store'
import { storeToRefs } from 'pinia'

const isOpenModalStore = useOpenModal()
const { isOpenModal } = storeToRefs(isOpenModalStore)
const modalValue = isOpenModal.value
console.log(modalValue, 'state')
</script>

<template>
  <teleport
    to="body"
    v-if="modalValue"
  >
    <div
      class="fixed top-0 right-0 left-0 z-50 w-screen h-screen flex justify-center items-center bg-black bg-opacity-60"
    >
      <div class="w-1/3 h-96 bg-white rounded-2xl p-10">
        <slot></slot>
      </div>
    </div>
  </teleport>
</template>

<style scoped lang="scss"></style>
