<script setup lang="ts">
import { reactive } from 'vue'
import ArrowGrayIcon from '@/shared/assets/icons/arrow-gray_icon.svg'
import AppText from '@/shared/ui/app-text.vue'
import { storeToRefs } from 'pinia'
import CatalogIconOrange from '@/shared/assets/icons/catalog_orange.svg'
import { useSidebarNavigationStore } from '../models/store/sidebar.store.ts'
const store = useSidebarNavigationStore()
const { handleShowNavigationSidebar } = store
const { isShowNavigationSidebar } = storeToRefs(store)

const categoryLinks = reactive([
  {
    link: 'О компании',
    path: '/about'
  },
  {
    link: 'Новости',
    path: '/news'
  },
  {
    link: 'Акции',
    path: '/'
  },
  {
    link: 'Статьи',
    path: '/articles'
  },
  {
    link: 'Доставка и оплата',
    path: '/'
  },
  {
    link: 'Youtube Канал',
    path: '/youtube'
  },
  {
    link: 'Контакты',
    path: '/contacts'
  }
])
</script>
<template>
  <aside
    :class="[
      'block fixed z-40 bg-white right-0  left-0 bottom-0 lg:hidden transition-all duration-700 overflow-x-hidden',
      isShowNavigationSidebar ? 'h-svh opacity-100 visible' : 'h-0 opacity-0 invisible'
    ]"
  >
    <div class="w-full z-50 h-14 bg-white shadow-2xl flex justify-between items-center px-5">
      <div class="flex gap-5 items-center">
        <img
          :src="CatalogIconOrange"
          alt="иконка каталога оранжевая"
          :width="16"
          :height="16"
        />
        Каталог
      </div>
      <div
        @click="handleShowNavigationSidebar"
        class="text-ash text-2xl"
      >
        &#10005;
      </div>
    </div>
    <div
      class="px-9 py-5 flex justify-between items-center border-b transition-all cursor-pointer"
      v-for="(link, id) in categoryLinks"
      :key="id"
      @click=""
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

<style lang="scss" scoped></style>
