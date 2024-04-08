<template>
  <div>
    <app-link to="/" class="flex items-center font-black" :color="'GOLD'" :font-size="'LG'" style="color: #FFC904">
      <img
        :src="AppNewLogo"
        alt="icon for logo of website"
        :width="isResponsive ? 80 :80"
        :height="isResponsive ? 40 : 40"
      />
      Bek<span class="text-blue-200" style="color: #122D40">Electro</span>
    </app-link>
  </div>
</template>

<script setup lang="ts">
// import AppLogo from '@/shared/assets/icons/app-logo.svg'
import { useWindowSize } from '@/shared/lib/composables/use-window.ts'
import AppLink from '@/shared/ui/app-link.vue'
import AppNewLogo from '@/shared/assets/icons/app-logo-transformed.webp'

const { isResponsive } = useWindowSize(768)
</script>

<style lang="scss" scoped></style>
