<script setup lang="ts">

interface ErrorContentProps {
  message?: string
}

const props = defineProps<ErrorContentProps>()

</script>

<template>
  <div>
    Произошла ошибка сорри {{ props.message}}
  </div>
</template>

<style scoped lang="scss">

</style>