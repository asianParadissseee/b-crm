<script setup lang="ts">
import { useTitle } from '@/shared/lib/composables/use-title.ts'
import { computed } from 'vue'

const title = computed(() => 'Страница не найдена')

useTitle(title.value)
</script>

<template>
  <main class="my-20 min-h-svh">
    <h1>404</h1>
  </main>
</template>

<style scoped lang="scss"></style>
