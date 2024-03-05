<template>
  <router-link :to="props.to">
    <slot></slot>
  </router-link>
</template>

<script setup lang="ts">
enum AppLinkAlign {
  RIGHT = 'text-right',
  LEFT = 'text-left',
  CENTER = 'text-center'
}
enum AppLinkFontSize {
  XXL = 'text-2xl',
  XL = 'text-xl',
  LG = 'text-xl',
  BASE = 'text-base',
  SM = 'text-sm',
  XS = 'text-xs'
}

interface AppLinkProps {
  to: string
  alignText?: AppLinkAlign
  fontSize?: AppLinkFontSize
}

const props = defineProps<AppLinkProps>()
</script>

<style scoped></style>
