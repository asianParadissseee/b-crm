<script setup lang="ts">
import AppTitle from '@/shared/ui/app-title.vue'
import { useTitle } from '@/shared/lib/composables/use-title.ts'
import { useFetchArticles } from '@/entity/articles'
import { ArticlesList } from '@/widgets/articles/articles-list'
import { ErrorContent } from '@/widgets/error-content'
import { LayoutNav } from '@/widgets/navbar'
import { ArticleSidebar } from '@/widgets/articles/article-sidebar'

useTitle('Статьи')
const { data: articles, isLoading, error, isError } = useFetchArticles()

</script>
<template>
  <layout-nav nav-link="Статьи">
    <app-title
      :font-weight="'MEDIUM'"
      :font-size="'XL4'"
    >
      Статьи
    </app-title>
    <div class="flex items-start my-10 gap-10">
      <article-sidebar />
      <div>
        <div v-if="isLoading">Загрузка</div>
        <div v-else-if="isError">
          <error-content :message="error?.message" />
        </div>
        <articles-list
          v-if="articles"
          :articles="articles"
        />
      </div>
    </div>
  </layout-nav>
</template>

<style scoped lang="scss"></style>
