<script setup lang="ts">

import { ArticlesResponse } from '@/entity/articles'

interface ArticlesDetailProps {
  articles: ArticlesResponse
}

const props = defineProps<ArticlesDetailProps>()

</script>

<template>
  <div>
    {{ props.articles?.description}}
  </div>
</template>

<style scoped lang="scss"></style>
