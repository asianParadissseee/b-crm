<template>
  <h1></h1>
</template>

<script setup lang="ts">
enum AppTitleAlign {
  RIGHT = 'text-right',
  LEFT = 'text-left',
  CENTER = 'text-center'
}
interface AppTitleProps {
  align?: AppTitleAlign
}

defineProps<AppTitleProps>()
</script>

<style lang="scss" scoped></style>
