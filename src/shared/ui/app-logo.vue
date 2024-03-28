<template>
  <div>
    <app-link to="/">
      <img
        :src="AppLogo"
        alt="icon for logo of website"
        :width="isResponsive ? 137 : 239"
        :height="isResponsive ? 35 : 61"
      />
    </app-link>
  </div>
</template>

<script setup lang="ts">
import AppLogo from '@/shared/assets/icons/app-logo.svg'
import { useWindowSize } from '@/shared/lib/composables/use-window.ts'
import AppLink from '@/shared/ui/app-link.vue'

const { isResponsive } = useWindowSize(768)
</script>

<style lang="scss" scoped></style>
