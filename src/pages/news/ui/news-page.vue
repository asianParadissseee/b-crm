<script setup lang="ts">
import AppText from '@/shared/ui/app-text.vue'
import AppTitle from '@/shared/ui/app-title.vue'
import { NewsList } from '@/widgets/news/news-list'
import { useFetchNews } from '@/entity/news'
import { useTitle } from '@/shared/lib/composables/use-title.ts'

const { data, isLoading, error } = useFetchNews()
useTitle('Новости')
</script>

<template>
  <main>
    <div class="container mx-auto px-5 min-h-svh">
      <div class="flex flex-col gap-y-9 my-5">
        <app-text
          :align-text="'LEFT'"
          :color="'SMOKE'"
        >
          <span class="text-dark">Главная страница</span>
          / Каталог
        </app-text>
        <app-title
          :color="'DARK'"
          :font-weight="'MEDIUM'"
          :font-size="'XL4'"
        >
          НОВОСТИ
        </app-title>
      </div>
      <div v-if="isLoading">Загрузка</div>
      <div v-else-if="error">Ошибка загрузки новостей {{ error.message }}</div>
      <news-list
        :news-data="data || []"
        v-else
      />
    </div>
  </main>
</template>

<style scoped lang="scss"></style>
