<script setup lang="ts">
import { LayoutNav } from '@/widgets/navbar'
import AppTitle from '@/shared/ui/app-title.vue'
import AppText from '@/shared/ui/app-text.vue'
import { reactive } from 'vue'

const shops = reactive([
  {
    address: 'г. Алматы, 12-й проезд Марьиной Рощи, д. 9, стр. 1, офис тел.',
    telephone: '+7 (495) 414-35-45'
  },
  {
    address: 'г. Шымкент, 12-й проезд Марьиной Рощи, д. 9, стр. 1, офис тел.',
    telephone: '+7 (495) 414-35-45'
  },
  {
    address: 'г. Тараз, 12-й проезд Марьиной Рощи, д. 9, стр. 1, офис тел.',
    telephone: '+7 (495) 414-35-45'
  }
])
</script>

<template>
  <layout-nav nav-link="Доставка">
    <app-title
      :font-size="'XL4'"
      font-weight="MEDIUM"
    >
      Доставка
    </app-title>
    <article class="my-5 flex flex-col gap-4">
      <app-title font-size="XL"> Бесплатная доставка при заказе на сумму от 100.000 тг </app-title>
      <ul class="text-sm list-disc ml-0 sm:ml-10 grid grid-cols-1 gap-3">
        <li>
          Бесплатная доставка осуществляется транспортной компанией СДЭК по Алматы, Шымкенту, Таразу и Кордаю. При
          условии, что товар имеется в наличии и отгружается со склада соответствующего города.
        </li>
        <li>
          Бесплатная доставка осуществляется транспортной компанией Деловые Линии до их терминала по всей территории
          России (за исключением авиа перевозки).
        </li>
      </ul>
    </article>
    <article class="my-5 flex flex-col gap-4">
      <app-title font-size="XL"> Бесплатно самовывозом при заказе на любую сумму </app-title>
      <app-text font-size="SM"> Наши склады/офисы/магазины: </app-text>
      <ul class="list-disc marker:text-gold grid grid-cols-1 gap-1 max-w-80 ml-0 sm:ml-10">
        <li
          v-for="(info, id) in shops"
          :key="id"
        >
          <a :href="info.telephone">
            {{ info.address }}
            <span class="text-gold">{{ info.telephone }}</span>
          </a>
        </li>
      </ul>
    </article>
  </layout-nav>
</template>

<style scoped lang="scss"></style>
