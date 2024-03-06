<template>
  <app-navbar v-if="!isMobile" />
  <app-navbar-media v-else />
  <slot></slot>
  <app-footer />
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'
import { AppNavbar, AppNavbarMedia } from '@/widgets/navbar'
import { AppFooter } from '@/widgets/footer'
const isMobile = ref(false)

const checkWindowSize = () => {
  isMobile.value = window.innerWidth <= 1024
}

onMounted(() => {
  checkWindowSize()
  window.addEventListener('resize', checkWindowSize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkWindowSize)
})
</script>

<style lang="scss" scoped></style>
