<script setup lang="ts">
import { Articles, ArticlesResponse } from '@/entity/articles'

interface ArticlesListProps {
  articles: ArticlesResponse[]
}

const props = defineProps<ArticlesListProps>()
</script>

<template>
  <article
    id="articles-list"
    class="grid grid-cols-1 gap-4 md:grid-cols-3"
  >
    <Articles
      v-for="article in props.articles"
      :title="article.title"
      :background-image="article.backgroundImage"
      :id="article.id"
      :description="article.description"
      :sub-title="article.subTitle"
      :create-at="article.createAt"
    />
  </article>
</template>

<style scoped lang="scss"></style>
