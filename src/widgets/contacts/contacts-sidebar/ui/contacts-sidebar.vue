<script setup lang="ts">
import AppText from '@/shared/ui/app-text.vue'
import ArrowGrayIcon from '@/shared/assets/icons/arrow-gray_icon.svg'
import { useCurrentPageStore } from '../models/store/current-page.store.ts'
import { reactive } from 'vue'

const store = useCurrentPageStore()
const { setCurrentPage } = store

interface ICategoryLink {
  link: string
  setCurrentPage: () => void
}

const categoryLinks = reactive<ICategoryLink[]>([
  {
    link: 'Центральный офис',
    setCurrentPage: () => setCurrentPage(1)
  },
  {
    link: 'Магазин',
    setCurrentPage: () => setCurrentPage(2)
  },
  {
    link: 'Дилеры других стран',
    setCurrentPage: () => setCurrentPage(3)
  },
  {
    link: 'Сервисные центры',
    setCurrentPage: () => setCurrentPage(4)
  }
])
</script>

<template>
  <aside
    id="contacts-sidebar"
    class="bg-lightAsh w-96 h-72 max-w-full rounded hidden lg:flex flex-col"
  >
    <div
      class="px-9 py-5 flex justify-between items-center border-b hover:bg-white transition-all cursor-pointer"
      v-for="(link, id) in categoryLinks"
      :key="id"
      @click="link.setCurrentPage"
    >
      <app-text
        :align-text="'LEFT'"
        :font-size="'BASE'"
      >
        {{ link.link }}
      </app-text>
      <div>
        <img
          :src="ArrowGrayIcon"
          alt="arrow icon"
          width="5"
          height="10"
        />
      </div>
    </div>
  </aside>
</template>

<style scoped lang="scss"></style>
