<script setup lang="ts">
enum AppButtonAlign {
  RIGHT = 'text-right',
  LEFT = 'text-left',
  CENTER = 'text-center'
}

enum AppButtonColor {
  PRIMARY = 'bg-gold',
  SECONDARY = 'bg-coal',
  TETRIARY = 'bg-white border border-smoke'
}

enum AppButtonSize {
  LARGE = 'w-52',
  MEDIUM = 'w-40',
  SMALL = 'w-36'
}

const props = defineProps({
  color: {
    type: String as () => keyof typeof AppButtonColor,
    default: AppButtonColor.PRIMARY
  },
  size: {
    type: String as () => keyof typeof AppButtonSize,
    default: AppButtonSize.LARGE
  },
  align: {
    type: String as () => keyof typeof AppButtonAlign,
    default: AppButtonAlign.CENTER
  },
  isIcon: {
    type: Boolean,
    default: false
  },
  src: {
    type: String,
    default: ''
  }
})
const buttonColorClass = AppButtonColor[props.color]
const buttonSizeClass = AppButtonSize[props.size]
const buttonAlignClass = AppButtonAlign[props.align]
</script>

<template>
  <button
    :class="[
      'text-dark',
      'text-center',
      'min-h-14',
      'hover:shadow-2xl',
      'hover:border-transparent',
      'hover:shadow-gold',
      'font-bold',
      'hover:bg-gold/70',
      'rounded',
       'px-2',
      buttonAlignClass,
      buttonColorClass,
      buttonSizeClass
    ]"
  >
    <slot v-if="!props.isIcon"></slot>
    <img
      v-else
      :src="props.src"
      alt="иконка для кнопки"
      class="p-3"
    />
  </button>
</template>

<style lang="scss" scoped></style>
