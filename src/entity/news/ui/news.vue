<script setup lang="ts">
import { NewsResponse } from '../models/types/news.schema.ts'
import AppText from '@/shared/ui/app-text.vue'
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps<NewsResponse>()
const formattedDate = computed(() => {
  const match = props.createAt.match(/\d{4}-\d{2}-\d{2}/)
  return match ? match[0] : null
})

const route = useRouter()

const handleNewsDetail = (id: string | number) => {
  route.push(`/news/${id}`)
}
</script>

<template>
  <div
    @click="handleNewsDetail(props.id)"
    class="border border-gray-400 max-w-[40.5rem] group my-10 min-h-56 rounded hover:shadow-2xl transition-all duration-200 cursor-pointer"
  >
    <div class="h-40 block max-w-[648px]">
      <img
        class="p-3"
        :src="props.id + ''"
        :alt="props.id + ''"
      />
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
        class="group-hover:text-gold"
      >
        {{ props.title }}
      </app-text>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
