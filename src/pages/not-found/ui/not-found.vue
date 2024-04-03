<script setup lang="ts">
import { useTitle } from '@/shared/lib/composables/use-title.ts'
import { computed } from 'vue'

const title = computed(() => 'Страница не найдена')

useTitle(title.value)
</script>

<template>
  <h1>404</h1>
</template>

<style scoped lang="scss"></style>
