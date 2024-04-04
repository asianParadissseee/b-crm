<script setup lang="ts">
import AppTitle from '@/shared/ui/app-title.vue'
import AppText from '@/shared/ui/app-text.vue'
import OrangeGeoIcon from '@/shared/assets/icons/orange-geo.svg'
import TelephoneIcon from '@/shared/assets/icons/telephone-icon.svg'
import EmailIcon from '@/shared/assets/icons/email.svg'
import TimeIcon from '@/shared/assets/icons/time-orange_icon.svg'
import CursorIcon from '@/shared/assets/icons/cursor-orage_icon.svg'
import { handleHref } from '@/shared/lib/href.ts'
import { reactive } from 'vue'
import AppMap from '@/shared/ui/app-map.vue'

interface IBlock {
  title: string
  subTitle?: string
  phoneNumber: string
  email: string
  schedule?: string
}

const blocks = reactive<IBlock[]>([
  {
    title: 'Отдел отгрузки',
    subTitle: 'Специалист по строительному и дорожному оборудованию',
    phoneNumber: '+7 (495) 103-48-50',
    email: 'Info@specokraska.ru',
    schedule: 'Пн.-Пт. с 10.00-17.00'
  },
  {
    title: 'Сервисная служба',
    phoneNumber: '+7 (495) 103-48-50',
    email: 'Info@specokraska.ru',
    schedule: 'Пн.-Пт. с 10.00-17.00'
  },
  {
    title: 'Александр Николаев',
    subTitle: 'Специалист по строительному и дорожному оборудованию',
    phoneNumber: '+7 (495) 103-48-50',
    email: 'Info@specokraska.ru'
  },
  {
    title: 'Андрей Попов',
    subTitle: 'Специалист по строительному и дорожному оборудованию',
    phoneNumber: '+7 (495) 103-48-50',
    email: 'Info@specokraska.ru'
  }
])
</script>

<template>
  <div class="max-w-11/12 w-full">
    <app-title
      :font-size="'XL4'"
      :font-weight="'MEDIUM'"
      :align-text="'LEFT'"
    >
      магазин
    </app-title>
    <app-map />
    <section
      class="py-3 px-6 shadow-xl w-full grid grid-cols-1 gap-10 md:place-items-start place-items-center md:grid-cols-3 rounded-xl"
    >
      <div class="flex flex-col gap-3">
        <div class="flex gap-4">
          <div>
            <img
              :src="OrangeGeoIcon"
              alt="оранжевая иконка геолокации"
              width="18"
              height="21"
            />
          </div>
          <div class="flex flex-col gap-2">
            <app-text
              :align-text="'LEFT'"
              :font-weight="'NORMAL'"
              :font-size="'BASE'"
              :color="'DARK'"
            >
              г. Алматы, ул. Кулиева 2А/7
            </app-text>
            <app-text
              :color="'GOLD'"
              :font-size="'SM'"
              :font-weight="'MEDIUM'"
              :align-text="'LEFT'"
            >
              Как добраться
            </app-text>
          </div>
        </div>
        <div class="flex gap-4 my-4">
          <div>
            <img
              :src="TelephoneIcon"
              alt="оранжевая иконка телефона"
              width="19"
              height="19"
            />
          </div>
          <div>
            <app-text
              @click="handleHref('tel', '+7 (495) 103-48-50')"
              :align-text="'LEFT'"
              :font-weight="'MEDIUM'"
              :font-size="'BASE'"
              :color="'DARK'"
              >+7 (495) 103-48-50
            </app-text>
            <app-text
              @click="handleHref('tel', '+7 (495) 103-74-75')"
              :align-text="'LEFT'"
              :font-weight="'MEDIUM'"
              :font-size="'BASE'"
              :color="'DARK'"
              >+7 (495) 103-74-75
            </app-text>
          </div>
        </div>
        <div class="flex gap-4">
          <div>
            <img
              :src="EmailIcon"
              alt="оранжевая иконка собачки для почты"
              width="20"
              height="20"
            />
          </div>
          <app-text
            :align-text="'LEFT'"
            @click="handleHref('mailto', 'Info@specokraska.ru')"
            class="cursor-pointer"
            :font-weight="'MEDIUM'"
            :font-size="'BASE'"
            :color="'GOLD'"
          >
            Info@specokraska.ru
          </app-text>
        </div>
      </div>
      <div class="flex gap-4">
        <div>
          <img
            :src="TimeIcon"
            alt="оранжевая иконка с таблом времени"
            width="20"
            height="20"
          />
        </div>
        <div class="flex flex-col gap-3">
          <app-text
            :color="'DARK'"
            :font-size="'BASE'"
            :font-weight="'MEDIUM'"
            :align-text="'LEFT'"
          >
            г. Алматы, ул. Кулиева 2А/7
          </app-text>
          <app-text
            :color="'DARK'"
            :font-size="'XS'"
            :font-weight="'MEDIUM'"
            :align-text="'LEFT'"
          >
            С понедельника по пятницу с 9:00 до 18:00 <br />
            Выходные дни — суббота и воскресенье
          </app-text>
        </div>
      </div>
      <div class="flex gap-4">
        <div>
          <img
            :src="CursorIcon"
            alt="оранжевая иконка курсора"
            width="20"
            height="20"
          />
        </div>
        <div class="flex flex-col gap-3">
          <app-text
            :color="'DARK'"
            :font-size="'BASE'"
            :font-weight="'MEDIUM'"
            :align-text="'LEFT'"
          >
            Приём заказов через сайт:
          </app-text>
          <app-text
            :color="'DARK'"
            :font-size="'XS'"
            :font-weight="'MEDIUM'"
            :align-text="'LEFT'"
          >
            Прием заказов через сайт и по <br />
            электронной почте осуществляется <br />
            круглосуточно, без выходных
          </app-text>
        </div>
      </div>
    </section>
    <section class="grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-3 gap-7 mt-10">
      <div
        v-for="(block, id) in blocks"
        :key="id"
        class="px-7 py-5 max-w-96 min-h-52 w-full shadow rounded border border-lightAsh flex flex-col gap-1"
      >
        <app-title
          :color="'DARK'"
          :font-size="'BASE'"
          :font-weight="'MEDIUM'"
          :align-text="'LEFT'"
        >
          {{ block.title }}
        </app-title>
        <app-text
          :color="'ASH'"
          :font-size="'XS'"
          :font-weight="'MEDIUM'"
          :align-text="'LEFT'"
        >
          {{ block.subTitle }}
        </app-text>
        <app-title
          :color="'DARK'"
          :font-size="'BASE'"
          :font-weight="'MEDIUM'"
          :align-text="'LEFT'"
        >
          {{ block.phoneNumber }}
        </app-title>
        <app-title
          :color="'DARK'"
          :font-size="'SM'"
          :font-weight="'MEDIUM'"
          :align-text="'LEFT'"
        >
          {{ block.email }}
        </app-title>
        <app-title
          :color="'DARK'"
          :font-size="'BASE'"
          :font-weight="'MEDIUM'"
          :align-text="'LEFT'"
        >
          {{ block.schedule }}
        </app-title>
      </div>
    </section>
    <section class="my-10 flex flex-col gap-4">
      <app-text
        :align-text="'LEFT'"
        :font-weight="'MEDIUM'"
        :font-size="'XS'"
        :color="'DARK'"
      >
        Время работы офиса: с понедельника по пятницу с 9:00 до 18:00. Выходные дни — суббота и воскресенье. <br />
        Прием заказов через сайт и по электронной почте осуществляется круглосуточно, без выходных.
      </app-text>
    </section>
  </div>
</template>

<style scoped lang="scss"></style>
