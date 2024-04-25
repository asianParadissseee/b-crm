<script setup lang="ts">
import { Articles, ArticlesResponse } from '@/entity/articles'

interface ArticlesListProps {
  articles: ArticlesResponse[]
}

const props = defineProps<ArticlesListProps>()
</script>

<template>
  <section
    id="articles-list"
    class="my-10 grid grid-cols-1 gap-4 sm:grid-cols-2"
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
  </section>
</template>

<style scoped lang="scss"></style>
