<template>
  <aside
    :class="[
      'block fixed z-50 bg-white right-0 left-0 top-0 lg:hidden transition-all duration-700 overflow-x-hidden',
      isShowSidebar ? 'h-svh opacity-100 visible' : 'h-0 opacity-0 invisible'
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
        @click="handleShowSidebar"
        class="text-ash text-2xl"
      >
        &#10005;
      </div>
    </div>
    <div
      class="px-9 py-5 flex justify-between items-center border-b transition-all cursor-pointer"
      v-for="(link, id) in categoryLinks"
      :key="id"
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

<script setup lang="ts">
import { reactive } from 'vue'
import { useSidebarStore } from '@/widgets/category-sidebar/models/store/sidebar.store.ts'
import ArrowGrayIcon from '@/shared/assets/icons/arrow-gray_icon.svg'
import AppText from '@/shared/ui/app-text.vue'
import { storeToRefs } from 'pinia'
import CatalogIconOrange from '@/shared/assets/icons/catalog_orange.svg'

const store = useSidebarStore()
const { handleShowSidebar } = store
const { isShowSidebar } = storeToRefs(store)




const categoryLinks = reactive([
  {
    link: 'Безвоздушные окрасочные аппараты',
    path: ''
  },
  {
    link: 'Промышленное окрасочное оборудование',
    path: ''
  },
  {
    link: 'Разметочные машины',
    path: ''
  },
  {
    link: 'Шлифмашинки',
    path: ''
  },
  {
    link: 'Оборудование для штукатурки и шпаклевки',
    path: ''
  },
  {
    link: 'Сопутствующие товары',
    path: ''
  },
  {
    link: 'Комплектующие для окрасочного оборудования',
    path: ''
  },
  {
    link: 'Краскопульты',
    path: ''
  },
  {
    link: 'Сварочное оборудование',
    path: ''
  },
  {
    link: 'Зарядные устройства',
    path: ''
  },
  {
    link: 'Индукционные нагреватели',
    path: ''
  },
  {
    link: 'Инструменты для правки вмятин кузова',
    path: ''
  },
  {
    link: 'Клепальный инструмент',
    path: ''
  },
  {
    link: 'Аксессуары для мастерской',
    path: ''
  },
  {
    link: 'Запчасти',
    path: ''
  }
])
</script>

<style lang="scss" scoped></style>
