<template>
  <h1></h1>
</template>

<script setup lang="ts">
enum AppTitleAlign {
  RIGHT = 'text-right',
  LEFT = 'text-left',
  CENTER = 'text-center'
}
enum AppTitleColor {
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
enum AppTitleFontSize {
  XXL = 'text-5xl',
  XL = 'text-xl',
  LG = 'text-xl',
  BASE = 'text-base',
  SM = 'text-sm',
  XS = 'text-xs'
}

interface AppTitleProps {
  align?: AppTitleAlign
  color?: AppTitleColor
  fontSize?: AppTitleFontSize
}

defineProps<AppTitleProps>()
</script>

<style lang="scss" scoped></style>
