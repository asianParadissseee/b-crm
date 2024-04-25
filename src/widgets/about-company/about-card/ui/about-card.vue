<script setup lang="ts">
import AppTitle from '@/shared/ui/app-title.vue'
import AppText from '@/shared/ui/app-text.vue'
import { handleHref } from '@/shared/lib/href.ts'

interface AboutCardProps {
  title: string
  description: string
  link: string
}

defineProps<AboutCardProps>()
</script>

<template>
  <div class="p-10 border border-ash max-w-full lg:h-96 lg:max-w-96">
    <div class="mb-20 flex flex-col gap-4 h-40">
      <app-title
        :font-weight="'MEDIUM'"
        :font-size="'XL'"
      >
        {{ title }}
      </app-title>
      <app-text
        :font-weight="'MEDIUM'"
        :font-size="'SM'"
      >
        {{ description }}
      </app-text>
    </div>
    <app-text
      :font-size="'XL'"
      :font-weight="'MEDIUM'"
      :color="'GOLD'"
      @click="handleHref('mailto', link)"
    >
      {{ link }}
    </app-text>
  </div>
</template>

<style scoped lang="scss"></style>
