<script setup lang="ts">
import { NewsResponse } from '../models/types/news.schema.ts'
import AppText from '@/shared/ui/app-text.vue'

const props = defineProps<NewsResponse>()
</script>

<template>
  <div>
    <div>
      <img
        :src="props.backgroundImage"
        :alt="props.description"
        :width="648"
        :height="164"
      />
    </div>
    <div>
      <app-text
        :font-size="'SM'"
        :font-weight="'MEDIUM'"
        :color="'SMOKE'"
        :align-text="'LEFT'"
      >
        {{ props.createAt }}
      </app-text>
      <app-text
        :align-text="'LEFT'"
        :font-weight="'MEDIUM'"
        :color="'GOLD'"
        :font-size="'SM'"
      >
        {{ props.title }}
      </app-text>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
