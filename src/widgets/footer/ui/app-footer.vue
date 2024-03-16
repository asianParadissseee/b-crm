<template>
  <footer class="bg-gold py-20">
    <div class="container px-5 max-w-9/12 w-full mx-auto flex justify-between">
      <div>
        <div class="flex flex-col gap-2">
          <app-title
            :font-size="'XL'"
            :font-weight="'MEDIUM'"
            :align-text="'LEFT'"
            >Контакты</app-title
          >
          <app-text> ул. Двинцева, д. 3, стр 1 </app-text>
          <app-text @click="handleHref(hrefAttr.TELEPHONE, '+7 (495) 103-48-50')"> +7 (495) 103-48-50 </app-text>
        </div>
        <div class="flex flex-col gap-2 mt-20">
          <app-text
            :align-text="'LEFT'"
            :font-weight="'NORMAL'"
            :font-size="'SM'"
          >
            C Интернет-магазин "Спецокраска"
          </app-text>
          <app-text
            :align-text="'LEFT'"
            :font-weight="'NORMAL'"
            :font-size="'SM'"
          >
            все права защищены
          </app-text>
        </div>
      </div>
      <div>
        <nav>
          <ul class="flex flex-col gap-2">
            <li
              v-for="(category, id) in categories"
              :key="id"
            >
              <app-link
                :font-size="'BASE'"
                :to="category.link"
              >
                {{ category.name }}
              </app-link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <nav>
          <ul class="flex flex-col gap-2">
            <li
              v-for="(link, id) in links"
              :key="id"
            >
              <app-link
                :to="link.link"
                :font-size="'BASE'"
                :font-weight="'MEDIUM'"
                :align-text="'CENTER'"
              >
                {{ link.name }}
              </app-link>
            </li>
          </ul>
        </nav>
      </div>
      <div class="flex flex-col">
        <div class="flex flex-col">
          <app-title
            :font-size="'XL'"
            :font-weight="'MEDIUM'"
            :align-text="'RIGHT'"
            >Мы в социальных сетях</app-title
          >
          <div class="flex justify-between items-center gap-2">
            <div
              v-for="(_, id) in iconsSocial"
              :key="id"
              class="w-8 h-8 bg-gold border-dark border-2 rounded-full mt-4"
            ></div>
          </div>
        </div>
        <div class="mt-20">
          <app-text
            :align-text="'LEFT'"
            :font-weight="'NORMAL'"
            :font-size="'SM'"
            >Есть вопросы ? Напишите нам</app-text
          >
          <app-text
            :align-text="'LEFT'"
            :font-weight="'NORMAL'"
            :font-size="'SM'"
            @click="handleHref(hrefAttr.EMAIL, 'info@inspeck.ru')"
            >info@inspeck.ru</app-text
          >
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import AppTitle from '@/shared/ui/app-title.vue'
import AppText from '@/shared/ui/app-text.vue'
import { handleHref, hrefAttr } from '@/shared/lib/href.ts'
import AppLink from '@/shared/ui/app-link.vue'

const iconsSocial = Array.from({ length: 6 }, icon => {
  return icon
})
const categories = [
  {
    name: 'Краспопульты',
    link: ''
  },
  {
    name: 'Бесвоздушные окрасночное аппараты',
    link: ''
  },
  {
    name: 'Промышленное окрасночное оборудование',
    link: ''
  },
  {
    name: 'Разметочные машины',
    link: ''
  },
  {
    name: 'Шлифомашинки',
    link: ''
  },
  {
    name: 'Оборудование для штукатурки, шпаклевки',
    link: ''
  },
  {
    name: 'Сопотствующие материалы',
    link: ''
  },
  {
    name: 'Комплектующие',
    link: ''
  }
]
const links = [
  {
    name: 'О компании',
    link: ''
  },
  {
    name: 'Новости',
    link: ''
  },
  {
    name: 'Акции',
    link: ''
  },
  {
    name: 'Статьи',
    link: ''
  },
  {
    name: 'Доставка и оплата',
    link: ''
  },
  {
    name: 'Контакты',
    link: ''
  }
]
</script>

<style lang="scss" scoped></style>
