<script setup lang="ts">
import AppText from '@/shared/ui/app-text.vue'
import ArrowGrayIcon from '@/shared/assets/icons/arrow-gray_icon.svg'
import { reactive } from 'vue'

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

<template>
  <aside
    id="category-sidebar"
    class="bg-lightAsh w-96 max-w-full rounded hidden lg:flex flex-col"
  >
    <div
      class="px-9 py-5 flex justify-between items-center border-b hover:bg-white transition-all cursor-pointer"
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

<style scoped lang="scss"></style>
