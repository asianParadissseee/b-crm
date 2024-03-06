<template>
  <p :class="[alignTextClass, fontSizeClass, colorClass, fontWeightClass]">
    <slot></slot>
  </p>
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

enum AppTextFontWeight {
  NORMAL = 'font-normal\t',
  MEDIUM = 'font-medium\t'
}

const props = defineProps({
  alignText: {
    type: String as () => keyof typeof AppTextAlign,
    default: AppTextAlign.CENTER
  },
  fontSize: {
    type: String as () => keyof typeof AppTextFontSize,
    default: AppTextFontSize.XL
  },
  color: {
    type: String as () => keyof typeof AppTextColor,
    default: AppTextColor.DARK
  },
  fontWeight: {
    type: String as () => keyof typeof AppTextFontWeight,
    default: AppTextFontWeight.MEDIUM
  }
})

const alignTextClass = AppTextAlign[props.alignText]
const fontSizeClass = AppTextFontSize[props.fontSize]
const colorClass = AppTextColor[props.color]
const fontWeightClass = AppTextFontWeight[props.fontWeight]
</script>

<style lang="scss" scoped></style>
