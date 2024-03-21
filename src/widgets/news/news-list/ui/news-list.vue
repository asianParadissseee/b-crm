<script setup lang="ts">
import { News, NewsResponse } from '@/entity/news'
import AppTitle from '@/shared/ui/app-title.vue'

interface NewsListProps {
  newsList: NewsResponse[]
}

const props = defineProps<NewsListProps>()
</script>

<template>
  <section
    id="news-list"
    class="my-10"
  >
    <News
      :id="news.id"
      :title="news.title"
      :background-image="news.backgroundImage"
      :description="news.description"
      v-if="!props.newsList?.length"
      :create-at="news.createAt"
      v-for="news in props.newsList"
      :key="news.id"
    />
    <app-title
      :font-size="'XL4'"
      :font-weight="'MEDIUM'"
      :color="'DARK'"
      :align-text="'CENTER'"
    >
      Новостей нет
    </app-title>
  </section>
</template>

<style scoped lang="scss"></style>
