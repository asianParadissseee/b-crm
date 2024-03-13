<script setup lang="ts">
import SagolaImg from '@/shared/assets/images/sagola-img.svg';
import SchaterImg from '@/shared/assets/images/schater-img.svg';
import YokijiImg from '@/shared/assets/images/yokiji-img.svg';
import SagolaIcon from '@/shared/assets/icons/sagola-sub_icon.svg';
import SchaterIcon from '@/shared/assets/icons/schater-sub_icon.svg';
import YokijiIcon from '@/shared/assets/icons/yokiji-sub_icon.svg';
import AppTitle from '@/shared/ui/app-title.vue';
import AppText from '@/shared/ui/app-text.vue';

const cards = [
  {
    img: YokijiImg,
    icon: YokijiIcon,
    title: 'Развитая филиальная сеть',
    description: 'Представительства во всех регионах РФ, а также в Республике Беларусь и Казахстане.',
  },
  {
    img: SchaterImg,
    icon: SchaterIcon,
    title: 'Доставка в любой регион России',
    description: 'Осуществляется любой транспортной компанией',
  },
  {
    img: SagolaImg,
    icon: SagolaIcon,
    title: 'Удобные способы оплаты',
    description: 'Наличный и безналичный расчет, выставление счета',
  },
];

</script>

<template>
  <div v-for="(card,id) in cards" :key="id" class="flex flex-col gap-5 rounded">
    <div>
      <img :src="card.img" :alt="card.description" width="288" height="248">
    </div>
    <div class=" mt-5 flex shadow max-w-72 w-full max-h-32 justify-between items-center p-3">
      <div class="flex flex-col gap-6">
        <app-title :font-size="'BASE'" :align-text="'LEFT'" :font-weight="'MEDIUM'" :color="'DARK'">
          {{ card.title }}
        </app-title>
        <app-text :color="'SMOKE'" :font-weight="'NORMAL'" :align-text="'LEFT'" :font-size="'XS'" >
          {{ card.description }}
        </app-text>
      </div>
      <div>
        <img :src="card.icon" alt="icon of card" width="55" height="55">
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>