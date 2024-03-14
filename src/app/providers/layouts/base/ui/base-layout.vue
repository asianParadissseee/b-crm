<template>
  <app-navbar v-if="!isResponsive" />
  <app-navbar-media v-else />
  <backcall-form />
  <slot></slot>
  <app-footer v-if="!isResponsive" />
  <mobile-nav v-else />
</template>

<script setup lang="ts">
import { AppNavbar, AppNavbarMedia } from '@/widgets/navbar'
import { AppFooter, MobileNav } from '@/widgets/footer'
import { useWindowSize } from '@/shared/lib/composables/use-window.ts'
import { BackcallForm } from '@/features/back-call'

const { isResponsive } = useWindowSize(1024)
</script>

<style lang="scss" scoped></style>
