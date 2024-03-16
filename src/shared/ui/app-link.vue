<template>
  <router-link
    :to="props.to"
    :class="[alignTextClass, fontSizeClass, colorClass, fontWeightClass]"
  >
    <slot></slot>
  </router-link>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

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

enum AppLinkFontWeight {
  NORMAL = 'font-normal',
  MEDIUM = 'font-medium'
}

enum AppLinkColor {
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

const props = defineProps({
  alignText: {
    type: String as () => keyof typeof AppLinkAlign,
    default: AppLinkAlign.CENTER
  },
  fontSize: {
    type: String as () => keyof typeof AppLinkFontSize,
    default: AppLinkFontSize.XL
  },
  color: {
    type: String as () => keyof typeof AppLinkColor,
    default: AppLinkColor.DARK
  },
  fontWeight: {
    type: String as () => keyof typeof AppLinkFontWeight,
    default: AppLinkFontWeight.MEDIUM
  },
  to: {
    type: [String, Object],
    required: true
  }
})
const alignTextClass = AppLinkAlign[props.alignText]
const fontSizeClass = AppLinkFontSize[props.fontSize]
const colorClass = AppLinkColor[props.color]
const fontWeightClass = AppLinkFontWeight[props.fontWeight]
</script>

<style scoped></style>
