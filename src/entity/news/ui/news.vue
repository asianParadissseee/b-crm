<script setup lang="ts">
import { NewsResponse } from '../models/types/news.schema.ts'
import AppText from '@/shared/ui/app-text.vue'
import { computed } from 'vue'

const props = defineProps<NewsResponse>()
const formattedDate = computed(() => {
  const match = props.createAt.match(/\d{4}-\d{2}-\d{2}/)
  return match ? match[0] : null
})
</script>

<template>
  <div class="border border-gray-400 w-[40.5rem] min-h-56 rounded">
    <div class="h-40 block bg-blue-400">
      <!--      <img-->
      <!--        :src="props.backgroundImage"-->
      <!--        :alt="props.description"-->
      <!--        :width="648"-->
      <!--        :height="164"-->
      <!--      />-->
    </div>
    <div class="flex flex-col gap-4 p-4">
      <app-text
        :font-size="'SM'"
        :font-weight="'MEDIUM'"
        :color="'SMOKE'"
        :align-text="'LEFT'"
      >
        {{ formattedDate }}
      </app-text>
      <app-text
        :align-text="'LEFT'"
        :font-weight="'MEDIUM'"
        :color="'DARK'"
        :font-size="'SM'"
      >
        {{ props.title }}
      </app-text>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
