<script setup lang="ts">
import { NewsDetail, useFetchNewsDetail } from '@/widgets/news/news-detail'
import { useRoute } from 'vue-router'
import { LayoutNav } from '@/widgets/navbar'
import { ErrorContent } from '@/widgets/error-content'

const route = useRoute()

const { data: news, isError, error, isLoading } = useFetchNewsDetail(String(route.params.id))
</script>

<template>
  <layout-nav :nav-link="'Новости'">
    <section>
      <div v-if="isLoading">Загрузка</div>
      <news-detail
        v-if="news"
        :news="news"
      />
      <error-content
        v-else-if="isError"
        :error="error"
      />
    </section>
  </layout-nav>
</template>

<style scoped lang="scss"></style>
