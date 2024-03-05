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
enum AppTextColor {
  GOLD = 'text-gold',
  MUSTARD = 'text-mustard',
  BODILY = 'text-bodily',
  DARK = 'text-dark',
  LIGHT_ASH = 'text-light_ash',
  COAL = 'text-coal',
  SILVER = 'text-silver',
  ASH = 'text-ash',
  SMOKE = 'text-smoke',
  ALERT = 'text-alert'
}

interface AppTextProps {
  alignText?: AppTextAlign
  fontSize?: AppTextFontSize
  color: AppTextColor
}

defineProps<AppTextProps>()
</script>

<style lang="scss" scoped></style>
