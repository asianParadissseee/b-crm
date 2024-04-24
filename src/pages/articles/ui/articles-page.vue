<script setup lang="ts">
import AppText from '@/shared/ui/app-text.vue'
import AppTitle from '@/shared/ui/app-title.vue'
import { useTitle } from '@/shared/lib/composables/use-title.ts'
import { useFetchArticles } from '@/entity/articles'
import { ArticlesList } from '@/widgets/articles/articles-list'
import { ErrorContent } from '@/widgets/error-content'

useTitle('Статьи')
const { data: articles, isLoading, error, isError } = useFetchArticles()
</script>
<template>
  <main class="my-20 min-h-svh">
    <div class="container mx-auto px-5 min-h-svh">
      <div class="flex flex-col gap-y-9 my-5">
        <app-text
          :align-text="'LEFT'"
          :color="'SMOKE'"
        >
          <span class="text-dark">Главная страница</span>
          / Статьи
        </app-text>
        <app-title
          :color="'DARK'"
          :font-weight="'MEDIUM'"
          :font-size="'XL4'"
        >
          СТАТЬИ
        </app-title>
      </div>
      <div v-if="isLoading">Загрузка</div>
      <div v-else-if="isError">
        <error-content :message="error?.message" />
      </div>
      <articles-list
        v-if="articles"
        :articles="articles"
      />
    </div>
  </main>
</template>

<style scoped lang="scss"></style>
