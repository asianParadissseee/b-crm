<template>
  <app-navbar v-if="!isResponsive" />
  <app-navbar-media v-else />
  <slot></slot>
  <app-footer v-if="!isResponsive" />
  <mobile-nav v-else />
</template>

<script setup lang="ts">
import { AppNavbar, AppNavbarMedia } from '@/widgets/navbar'
import { AppFooter } from '@/widgets/footer'
import { useWindowSize } from '@/shared/lib/composables/use-window.ts'
import MobileNav from '@/shared/ui/mobile-nav.vue'

const { isResponsive } = useWindowSize(1024)
</script>

<style lang="scss" scoped></style>
