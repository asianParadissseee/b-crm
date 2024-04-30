<template>
  <div class="grid grid-rows-2 sm:grid-rows-none sm:grid-cols-3 gap-5">
    <div
      v-for="(card, id) in cards"
      :key="id"
    >
      <div class="col-span-3 mb-5">
        <img
          class="rounded w-80 h-60"
          :src="card.img"
          :alt="card.description"
          :width="312"
          :height="248"
        />
      </div>
      <div
        class="col-span-3 border border-gray max-w-80 w-full h-40 p-2 rounded flex items-center gap-5 justify-between hover:shadow-2xl transition-all"
      >
        <div class="max-w-44 w-full mx-auto flex flex-col gap-4">
          <app-title
            class="hover:text-gold"
            :color="'DARK'"
            :font-weight="'MEDIUM'"
            :align-text="'LEFT'"
            :font-size="'BASE'"
            >{{ card.title }}
          </app-title>
          <app-text
            :align-text="'LEFT'"
            :font-size="'XS'"
            :font-weight="'NORMAL'"
            :color="'SMOKE'"
            >{{ card.description }}
          </app-text>
        </div>
        <div>
          <img
            :src="card.icon"
            alt="icon of card"
            :width="55"
            :height="55"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SagolaImg from '@/shared/assets/images/sagola-img.svg'
import SchaterImg from '@/shared/assets/images/schater-img.svg'
import YokijiImg from '@/shared/assets/images/yokiji-img.svg'
import SagolaIcon from '@/shared/assets/icons/sagola-sub_icon.svg'
import SchaterIcon from '@/shared/assets/icons/schater-sub_icon.svg'
import YokijiIcon from '@/shared/assets/icons/yokiji-sub_icon.svg'
import AppTitle from '@/shared/ui/app-title.vue'
import AppText from '@/shared/ui/app-text.vue'

const cards = [
  {
    img: YokijiImg,
    icon: YokijiIcon,
    title: 'Развитая филиальная сеть',
    description: 'Представительства во всех регионах РФ, а также в Республике Беларусь и Казахстане.'
  },
  {
    img: SchaterImg,
    icon: SchaterIcon,
    title: 'Доставка в любой регион России',
    description: 'Осуществляется любой транспортной компанией'
  },
  {
    img: SagolaImg,
    icon: SagolaIcon,
    title: 'Удобные способы оплаты',
    description: 'Наличный и безналичный расчет, выставление счета'
  }
]
</script>

<style scoped></style>
