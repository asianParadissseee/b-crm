<script setup lang="ts">
import { News, NewsResponse } from '@/entity/news'
import AppTitle from '@/shared/ui/app-title.vue'

interface NewsListProps {
  newsData: NewsResponse[]
}

const props = defineProps<NewsListProps>()
</script>

<template>
  <section
    id="news-list"
    class="my-10 grid grid-cols-1 gap-4 sm:grid-cols-3"
  >
    <News
      :title="news.title"
      :background-image="news.backgroundImage"
      :description="news.description"
      v-if="props.newsData?.length"
      :create-at="news.createAt"
      v-for="news in props.newsData"
      :key="news._id"
      :_id="news._id"
    />
    <app-title
      v-else
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
