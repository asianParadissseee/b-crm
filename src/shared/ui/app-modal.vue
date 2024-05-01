<script setup lang="ts">
import { onUnmounted, watch } from 'vue'

interface ModalProps {
  isOpenModal: boolean
  handleShowModal: () => void
}

const props = defineProps<ModalProps>()

const handleKeyDown = (event: KeyboardEvent) => {
  if ((event.key === 'Escape' || event.keyCode === 27) && props.isOpenModal) {
    props.handleShowModal()
  }
}
//@ts-ignore
watch(props.isOpenModal, value => {
  if (value) {
    window.addEventListener('keydown', handleKeyDown)
  } else {
    window.removeEventListener('keydown', handleKeyDown)
  }
})
onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown)
})
</script>

<template>
  <teleport
    to="body"
    v-if="props.isOpenModal"
  >
    <div
      tabindex="-1"
      class="fixed top-0 right-0 left-0 z-50 w-screen h-screen flex justify-center items-center bg-black bg-opacity-60"
    >
      <div class="w-1/3 min-h-96 bg-white rounded-2xl p-10 relative">
        <div
          class="top-3 right-10 absolute text-smoke cursor-pointer"
          @click="props.handleShowModal"
        >
          &#10005;
        </div>
        <slot></slot>
      </div>
    </div>
  </teleport>
</template>

<style scoped lang="scss"></style>
