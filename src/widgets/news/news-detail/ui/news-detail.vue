<script setup lang="ts">
import { NewsResponse } from '@/entity/news'
import AppTitle from '@/shared/ui/app-title.vue'
import AppText from '@/shared/ui/app-text.vue'
import AppButton from '@/shared/ui/app-button.vue'
import { useRouter } from 'vue-router'

interface NewsDetailProps {
  news: NewsResponse
}

const route = useRouter()

const props = defineProps<NewsDetailProps>()
</script>

<template>
  <div>
    <app-title
      :font-weight="'MEDIUM'"
      :color="'DARK'"
      :align-text="'LEFT'"
      :font-size="'XL4'"
    >
      {{ props.news.title }}
    </app-title>
    <div class="flex justify-between my-10 flex-col-reverse xl:flex-row">
      <div class="flex flex-col gap-5 max-w-96 w-full">
        <app-text
          :font-size="'BASE'"
          :align-text="'LEFT'"
          :color="'ASH'"
          :font-weight="'NORMAL'"
        >
          {{ props.news.createAt }}
        </app-text>
        <app-title
          :font-weight="'MEDIUM'"
          :color="'DARK'"
          :align-text="'LEFT'"
          :font-size="'XL2'"
        >
          {{ props.news.title }}
        </app-title>
        <app-text
          :font-size="'SM'"
          :align-text="'LEFT'"
          :color="'DARK'"
          :font-weight="'MEDIUM'"
        >
          {{ props.news.description }}
        </app-text>

        <div>
          <app-title
            :font-size="'XL'"
            :align-text="'LEFT'"
            :color="'DARK'"
            :font-weight.attr="'MEDIUM'"
            >Описание
          </app-title>
          <app-text
            :font-weight="'MEDIUM'"
            :color="'DARK'"
            :align-text="'LEFT'"
            :font-size="'BASE'"
          >
            {{ props.news.subDescription }}
          </app-text>
        </div>
      </div>
      <div class="max-w-96">
        <img
          :src="props.news.backgroundImage"
          :alt="props.news.description"
          :width="647"
          :height="177"
        />
      </div>
    </div>
    <hr class="h-0.5 bg-ash my-10" />
    <div class="flex justify-center items-center my-20">
      <app-button
        @click="route.push('/news')"
        :color="'TETRIARY'"
        :size="'LARGE'"
        class="text-ash"
        :align="'CENTER'"
      >
        К СПИСКУ НОВОСТЕЙ
      </app-button>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
