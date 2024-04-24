<template>
  <div class="border max-w-96 min-h-80 rounded-xl border-gray-400">
    <div>
      <img
        :src="props.backgroundImage"
        :alt="props.title"
        :width="312"
        :height="200"
      />
    </div>
    <div class="p-4 flex flex-col gap-5">
      <app-text
        :align-text="'LEFT'"
        :color="'ASH'"
        :font-size="'BASE'"
      >
        {{ formattedDate }}
      </app-text>
      <app-title
        :font-size="'XL'"
        :color="'DARK'"
        :align-text="'LEFT'"
        :font-weight="'NORMAL'"
      >
        {{ props.title }}
      </app-title>
      <app-text
        :font-size="'SM'"
        :color="'LIGHT_ASH'"
        :font-weight="'NORMAL'"
      >
        {{ props.subTitle }}
      </app-text>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArticlesResponse } from '@/entity/articles'
import AppText from '@/shared/ui/app-text.vue'
import { computed } from 'vue'
import AppTitle from '@/shared/ui/app-title.vue'

const props = defineProps<ArticlesResponse>()
const formattedDate = computed(() => {
  const match = props.createAt.match(/\d{4}-\d{2}-\d{2}/)
  return match ? match[0] : null
})
</script>

<style scoped></style>
