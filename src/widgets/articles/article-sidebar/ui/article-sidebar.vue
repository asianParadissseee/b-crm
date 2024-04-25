<script setup lang="ts">
import AppText from '@/shared/ui/app-text.vue'
import AppInput from '@/shared/ui/app-input.vue'

// interface ArticleSidebarProps {
//   searchQuery: string
// }

// const props = defineProps<ArticleSidebarProps>()
</script>

<template>
  <aside class="bg-lightAsh sticky hidden lg:block max-w-80 h-80 px-7 py-3 rounded">
    <div class="flex justify-start items-start flex-col">
      <div class="flex flex-col gap-2">
        <app-text
          :color="'DARK'"
          :font-size="'SM'"
          :font-weight="'MEDIUM'"
        >
          Поиск по тексту
        </app-text>
        <app-input placeholder="Что вы ищете ?" />
      </div>
      <div class="flex flex-col gap-2 mt-4">
        <app-text
          :color="'DARK'"
          :font-size="'SM'"
          :font-weight="'MEDIUM'"
        >
          Категории статей
        </app-text>
      </div>
    </div>
  </aside>
</template>

<style scoped lang="scss"></style>
