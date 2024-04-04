<template>
  <main class="my-20 min-h-svh">
    <articles-list />
  </main>
</template>

<script lang="ts" setup>
import { ArticlesList } from '@/widgets/articles/articles-list'
import { useTitle } from '@/shared/lib/composables/use-title.ts'
useTitle('Статьи')
</script>

<style lang="scss" scoped></style>
