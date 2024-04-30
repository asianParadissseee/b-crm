<script setup lang="ts">
import { NewsList } from '@/widgets/news/news-list'
import { LayoutNav } from '@/widgets/navbar'
import { useFetchNews } from '@/entity/news'
import { useTitle } from '@/shared/lib/composables/use-title.ts'
import AppTitle from '@/shared/ui/app-title.vue'

const { data, isLoading, error } = useFetchNews()
useTitle('Новости')
</script>

<template>
  <layout-nav nav-link="Новости">
    <app-title font-size="XL4" font-weight="MEDIUM">
      Новости
    </app-title>
    <div v-if="isLoading">Загрузка</div>
    <div v-else-if="error">Ошибка загрузки новостей {{ error.message }}</div>
    <news-list
      :news-data="data || []"
      v-else
    />
  </layout-nav>
</template>

<style scoped lang="scss"></style>
