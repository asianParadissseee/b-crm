<template>
  <app-navbar v-if="!isResponsive" />
  <app-navbar-media v-else />
  <category-sidebar-mobile />
  <app-sidebar />
  <backcall-form />
  <registration-form />
  <slot></slot>
  <app-footer v-if="!isResponsive" />
  <mobile-nav v-else />
</template>

<script setup lang="ts">
import { AppNavbar, AppNavbarMedia } from '@/widgets/navbar'
import { AppFooter, MobileNav } from '@/widgets/footer'
import { CategorySidebarMobile } from '@/widgets/category-sidebar'
import { BackcallForm } from '@/features/back-call'
import { useWindowSize } from '@/shared/lib/composables/use-window.ts'
import { AppSidebar } from '@/widgets/sidebar'
import RegistrationForm from '@/features/registration/ui/registration-form.vue'

const { isResponsive } = useWindowSize(1024)
</script>

<style lang="scss" scoped></style>
