<template>
  <h1 :class="[alignTextClass, fontSizeClass, fontWeightClass, colorClass]">
    <slot></slot>
  </h1>
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
  XL5 = 'text-5xl',
  XL4 = 'text-4xl',
  XL2 = 'text-2xl',
  XL = 'text-xl',
  BASE = 'text-base',
  SM = 'text-sm'
}
enum AppTitleFontWeight {
  NORMAL = 'font-normal',
  MEDIUM = 'font-bold'
}

const props = defineProps({
  alignText: {
    type: String as () => keyof typeof AppTitleAlign,
    default: AppTitleAlign.CENTER
  },
  fontSize: {
    type: String as () => keyof typeof AppTitleFontSize,
    default: AppTitleFontSize.XL
  },
  color: {
    type: String as () => keyof typeof AppTitleColor,
    default: AppTitleColor.DARK
  },
  fontWeight: {
    type: String as () => keyof typeof AppTitleFontWeight,
    default: AppTitleFontWeight.MEDIUM
  }
})

const alignTextClass = AppTitleAlign[props.alignText]
const fontSizeClass = AppTitleFontSize[props.fontSize]
const colorClass = AppTitleColor[props.color]
const fontWeightClass = AppTitleFontWeight[props.fontWeight]
</script>

<style lang="scss" scoped></style>
