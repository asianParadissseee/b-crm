<script setup lang="ts">
import { ArticlesResponse } from '@/entity/articles'
import AppTitle from '@/shared/ui/app-title.vue'
import AppText from '@/shared/ui/app-text.vue'
import AppButton from '@/shared/ui/app-button.vue'
import { useRouter } from 'vue-router'
import { useTitle } from '@/shared/lib/composables/use-title.ts'

interface ArticlesDetailProps {
  articles: ArticlesResponse
}

const route = useRouter()
const props = defineProps<ArticlesDetailProps>()

useTitle(props.articles.title)
</script>

<template>
  <div>
    <app-title
      :font-weight="'MEDIUM'"
      :color="'DARK'"
      :align-text="'LEFT'"
      :font-size="'XL4'"
    >
      {{ props.articles.title }}
    </app-title>
    <div class="flex justify-between">
      <div class="flex flex-col gap-3 mt-10 w-1/3">
        <app-text
          :color="'ASH'"
          :align-text="'LEFT'"
          :font-size="'SM'"
          :font-weight="'MEDIUM'"
        >
          {{ props.articles.createAt }}
        </app-text>
        <app-title
          :font-size="'XL'"
          :align-text="'LEFT'"
          :color="'DARK'"
        >
          {{ props.articles.subTitle }}
        </app-title>
        <app-text>
          {{ props.articles.description }}
        </app-text>
      </div>
      <div>
        <img
          :src="props.articles.backgroundImage"
          :alt="props.articles.subTitle"
          :width="649"
          :height="507"
        />
      </div>
    </div>
    <hr class="h-0.5 bg-ash my-10" />
    <div class="flex justify-center items-center my-20">
      <app-button
        @click="route.push('/articles')"
        :color="'TETRIARY'"
        :size="'LARGE'"
        class="text-ash"
        :align="'CENTER'"
      >
        К СПИСКУ СТАТЕЙ
      </app-button>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
