<template>
  <router-link
    :to="props.to"
    :class="[alignTextClass, fontSizeClass, colorClass]"
  >
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
//
// interface AppLinkProps {
//   to: string
//   alignText?: AppLinkAlign
//   fontSize?: AppLinkFontSize
//   color?: AppLinkColor
// }

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
  to: {
    type: String,
    default: ""
  }
})
const alignTextClass = AppLinkAlign[props.alignText]
const fontSizeClass = AppLinkFontSize[props.fontSize]
const colorClass = AppLinkColor[props.color]
</script>

<style scoped></style>
