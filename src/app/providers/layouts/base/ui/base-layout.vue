<template>
  <app-navbar v-if="!isResponsive" />
  <app-navbar-media v-else />
  <app-sidebar />
  <backcall-form />
  <slot></slot>
  <app-footer v-if="!isResponsive" />
  <mobile-nav v-else />
</template>

<script setup lang="ts">
import { AppNavbar, AppNavbarMedia } from '@/widgets/navbar'
import { AppFooter, MobileNav } from '@/widgets/footer'
import { AppSidebar } from '@/widgets/sidebar'
import { BackcallForm } from '@/features/back-call'
import { useWindowSize } from '@/shared/lib/composables/use-window.ts'

const { isResponsive } = useWindowSize(1024)
</script>

<style lang="scss" scoped></style>
