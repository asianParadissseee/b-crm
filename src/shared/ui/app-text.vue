<template>
  <div></div>
</template>

<script setup lang="ts">
enum AppTextAlign {
  RIGHT = 'text-right',
  LEFT = 'text-left',
  CENTER = 'text-center'
}

enum AppTextFontSize {
  XXL = 'text-2xl',
  XL = 'text-xl',
  LG = 'text-xl',
  BASE = 'text-base',
  SM = 'text-sm',
  XS = 'text-xs'
}

interface AppTextProps {
  alignText?: AppTextAlign
  fontSize?: AppTextFontSize
}

 defineProps<AppTextProps>()
</script>

<style lang="scss" scoped></style>
