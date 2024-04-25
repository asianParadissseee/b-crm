<script setup lang="ts">
import { LayoutNav } from '@/widgets/navbar'
import { ArticlesDetail, useFetchArticleDetail } from '@/widgets/articles/articles-detail'
import { useRoute } from 'vue-router'
import { ErrorContent } from '@/widgets/error-content'

const route = useRoute()

const { data: articles, isError, error, isLoading } = useFetchArticleDetail(String(route.params.id))
</script>

<template>
  <layout-nav nav-link="Статьи">
    <section>
      <div v-if="isLoading">Загрузка</div>
      <articles-detail
        v-if="articles"
        :articles="articles"
      />
      <error-content
        v-else-if="isError"
        :error="error"
      />
    </section>
  </layout-nav>
</template>

<style scoped lang="scss"></style>
