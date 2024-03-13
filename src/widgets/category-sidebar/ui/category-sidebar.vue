<script setup lang="ts">

import AppText from '@/shared/ui/app-text.vue';
import ArrowGrayIcon from '@/shared/assets/icons/arrow-gray_icon.svg';

const categoryLinks = [
  {
    link: 'Безвоздушные окрасочные аппараты',
    path: '',
  },
  {
    link: 'Промышленное окрасочное оборудование',
    path: '',
  },
  {
    link: 'Разметочные машины',
    path: '',
  },
  {
    link: 'Шлифмашинки',
    path: '',
  },
  {
    link: 'Оборудование для штукатурки и шпаклевки',
    path: '',
  },
  {
    link: 'Сопутствующие товары',
    path: '',
  }
  , {
    link: 'Комплектующие для окрасочного оборудования',
    path: '',
  },
  {
    link: 'Краскопульты',
    path: '',
  }
  , {
    link: 'Сварочное оборудование',
    path: '',
  }
  , {
    link: 'Зарядные устройства',
    path: '',
  }
  , {
    link: 'Индукционные нагреватели',
    path: '',
  }
  , {
    link: 'Инструменты для правки вмятин кузова',
    path: '',
  }
  , {
    link: 'Клепальный инструмент',
    path: '',
  },
  {
    link: 'Аксессуары для мастерской',
    path: '',
  }
  , {
    link: 'Запчасти',
    path: '',
  },
];

</script>

<template>
  <aside id="category-sidebar" class="bg-lightAsh w-80 max-w-full">
    <div class="p-4 flex justify-between items-center" v-for="(link,id) in categoryLinks" :key="id">
      <app-text>
        {{ link.link }}
      </app-text>
      <div>
        <img :src="ArrowGrayIcon" alt="arrow icon" width="5" height="10">
      </div>
    </div>
  </aside>
</template>

<style scoped lang="scss">

</style>