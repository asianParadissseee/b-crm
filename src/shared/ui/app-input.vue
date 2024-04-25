<template>
  <div class="flex relative">
    <input
      type="text"
      :value="props.value"
      :placeholder="props.placeholder"
      :class="[
        'h-10',
        'px-2',
        'px-3',
        'rounded',
        'bg-white',
        'border-2',
        'outline-none',
        'text-sm',
        'placeholder::text-coal',
        'text-dark',
        sizeClass,
        borderColorClass
      ]"
    />
    <div
      class="w-10 h-10 flex justify-center items-center bg-gold absolute right-0 rounded-r"
      v-if="isIcon"
    >
      <img
        :src="SearchLightIcon"
        alt="icon of search"
        width="16"
        height="16"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import SearchLightIcon from '@/shared/assets/icons/search-light.svg'

enum AppInputSize {
  DEFAULT = 'max-w-60 w-full',
  TABLET = 'max-w-[40rem] w-full',
  DESKTOP = 'max-w-[31.438rem] w-full'
}

enum AppInputBorderColor {
  GOLD = 'border-gold',
  COAL = 'border-coal',
  ERROR = 'border-alert'
}

const props = defineProps({
  value: String,
  name: String,
  placeholder: String,
  size: {
    type: String as () => keyof typeof AppInputSize,
    default: AppInputSize.DESKTOP
  },
  borderColor: {
    type: String as () => keyof typeof AppInputBorderColor,
    default: AppInputBorderColor.COAL
  },
  isIcon: Boolean
})

const sizeClass = AppInputSize[props.size]
const borderColorClass = AppInputBorderColor[props.borderColor]
</script>

<style lang="scss" scoped></style>
