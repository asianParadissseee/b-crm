<script setup lang="ts">
import { reactive } from 'vue'
import AppText from '@/shared/ui/app-text.vue'
import AppTitle from '@/shared/ui/app-title.vue'
import GeoIcon from '@/shared/assets/icons/orange-geo.svg'
import OrangeGeoIcon from '@/shared/assets/icons/orange-geo.svg'
import TelephoneIcon from '@/shared/assets/icons/telephone-icon.svg'
import { handleHref } from '@/shared/lib/href.ts'
import EmailIcon from '@/shared/assets/icons/email.svg'
import TimeIcon from '@/shared/assets/icons/time-orange_icon.svg'
import CursorIcon from '@/shared/assets/icons/cursor-orage_icon.svg'
import CursorBorderIcon from '@/shared/assets/icons/cursor-border_icon.svg'
import AppButton from '@/shared/ui/app-button.vue'
import TelegramIcon from '@/shared/assets/icons/telegram-icon.svg'
import AppMap from '@/shared/ui/app-map.vue'

interface IShop {
  name: string
  address: string
  email: string
  mapLink: string
}

interface IDealer {
  city: string
  shops: IShop[]
}

interface IDealerBlock {
  country: string
  dealers: IDealer[]
}

const dealerBlocks = reactive<IDealerBlock[]>([
  {
    country: 'Казахстан',
    dealers: [
      {
        city: 'Актобе',
        shops: [
          {
            name: 'Hug & Hug',
            address: 'пр-кт Санкибай Батыра 26Д, 1-этаж, 7 бутик',
            email: 'email@example.com',
            mapLink: 'https://2gis.kz/'
          },
          {
            name: 'Markeldom',
            address: 'пр-кт Санкибай Батыра 26Д, ТД "Мерей-2", 1 бутик',
            email: 'abylay.ketebayev@gmail.com',
            mapLink: 'https://2gis.kz/'
          },
          {
            name: 'Markeldom',
            address: 'пр-кт Санкибай Батыра 26Д, ТД "Мерей-2", 1 бутик',
            email: 'abylay.ketebayev@gmail.com',
            mapLink: 'https://2gis.kz/'
          }
        ]
      },
      {
        city: 'Алматы',
        shops: [
          {
            name: 'Markeldom',
            address: 'пр-кт Санкибай Батыра 26Д, ТД "Мерей-2", 1 бутик',
            email: 'abylay.ketebayev@gmail.com',
            mapLink: 'https://2gis.kz/'
          }
        ]
      }
    ]
  },
  {
    country: 'Беларусь',
    dealers: [
      {
        city: 'Минск',
        shops: [
          {
            name: 'Markeldom',
            address: 'Беларусь, г. Минск, пр-кт Санкибай Батыра 26Д, ТД "Мерей-2", 1 бутик',
            email: 'abylay.ketebayev@gmail.com',
            mapLink: 'https://2gis.kz/'
          },
          {
            name: 'Markeldom',
            address: 'Беларусь, г. Минск, пр-кт Санкибай Батыра 26Д, ТД "Мерей-2", 1 бутик',
            email: 'abylay.ketebayev@gmail.com',
            mapLink: 'https://2gis.kz/'
          }
        ]
      }
    ]
  },
  {
    country: 'Таджикистан',
    dealers: [
      {
        city: 'Душанбе',
        shops: [
          {
            name: 'Markeldom',
            address: 'Таджикистан, г. Душанбе, пр-кт Санкибай Батыра 26Д, ТД "Мерей-2", 1 бутик',
            email: 'abylay.ketebayev@gmail.com',
            mapLink: 'https://2gis.kz/'
          },
          {
            name: 'Markeldom',
            address: 'Таджикистан, г. Душанбе, пр-кт Санкибай Батыра 26Д, ТД "Мерей-2", 1 бутик',
            email: 'abylay.ketebayev@gmail.com',
            mapLink: 'https://2gis.kz/'
          },
          {
            name: 'Markeldom',
            address: 'Таджикистан, г. Душанбе, пр-кт Санкибай Батыра 26Д, ТД "Мерей-2", 1 бутик',
            email: 'abylay.ketebayev@gmail.com',
            mapLink: 'https://2gis.kz/'
          }
        ]
      }
    ]
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
      сервисные центры
    </app-title>
    <app-map />
    <section
      class="py-3 px-6 shadow-xl my-10 w-full grid grid-cols-1 gap-10 md:place-items-start place-items-center md:grid-cols-3 rounded-xl"
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
              г. Москва, ул. Веткина 2А/7
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
            г. Москва, ул. Веткина 2А/7
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
    <section
      class="grid place-items-center grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 my-10 px-8 gap-10 xl:px-14 py-7 bg-lightAsh rounded-xl"
    >
      <div class="flex gap-2 items-center">
        <div>
          <img
            :src="CursorBorderIcon"
            alt="оранжевая иконка курсора с черными границами"
            :width="32"
            :height="32"
          />
        </div>
        <app-text
          :align-text="'LEFT'"
          :font-weight="'MEDIUM'"
          :color="'DARK'"
          :font-size="'BASE'"
        >
          Оставьте заявку любым <br />
          удобным для вас способом
        </app-text>
      </div>
      <div>
        <app-button
          :color="'PRIMARY'"
          :size="'LARGE'"
          :align="'CENTER'"
        >
          оставить заявку
        </app-button>
      </div>
      <div
        class="flex gap-4 items-center"
        @click="handleHref('mailto', 'Info@specokraska.ru')"
      >
        <div>
          <img
            :src="EmailIcon"
            alt="оранжевая иконка собачки для почты"
            :width="20"
            :height="20"
          />
        </div>
        <app-text
          :align-text="'LEFT'"
          class="cursor-pointer"
          :font-weight="'MEDIUM'"
          :font-size="'BASE'"
          :color="'DARK'"
        >
          Info@specokraska.ru
        </app-text>
      </div>
      <div class="flex gap-2 items-center">
        <div>
          <img
            :src="TelegramIcon"
            alt="иконка телеграмма"
            :width="22"
            :height="22"
          />
        </div>
        <app-text
          :align-text="'LEFT'"
          class="cursor-pointer"
          :font-weight="'MEDIUM'"
          :font-size="'BASE'"
          :color="'DARK'"
        >
          @specok_bot
        </app-text>
      </div>
    </section>
    <section class="grid-cols-1 grid">
      <div
        class=""
        v-for="block in dealerBlocks"
        :key="block.country"
      >
        <app-title
          :align-text="'LEFT'"
          :font-weight="'MEDIUM'"
          :font-size="'XL'"
          :color="'DARK'"
        >
          {{ block.country }}
        </app-title>
        <div
          v-for="dealer in block.dealers"
          :key="dealer.city"
        >
          <div class="flex gap-2 items-center mt-4">
            <div>
              <img
                :src="GeoIcon"
                alt="оранжевая иконка геолокации"
                width="18"
                height="21"
              />
            </div>
            <app-title
              :color="'DARK'"
              :font-size="'BASE'"
              :font-weight="'MEDIUM'"
              :align-text="'LEFT'"
            >
              {{ dealer.city }}
            </app-title>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-10 my-5">
            <div
              class="shadow p-5 rounder transition-all border border-lightAsh group flex flex-col gap-3 max-w-96 w-full hover:shadow-2xl cursor-pointer"
              v-for="(shop, id) in dealer.shops"
              :key="id"
            >
              <app-title
                :align-text="'LEFT'"
                class="group-hover:text-gold"
                :font-weight="'MEDIUM'"
                :font-size="'BASE'"
                :color="'DARK'"
              >
                {{ shop.name }}
              </app-title>
              <app-text
                :font-size="'XS'"
                :color="'DARK'"
                :font-weight="'NORMAL'"
                :align-text="'LEFT'"
              >
                {{ shop.address }}
              </app-text>
              <app-text
                :font-size="'SM'"
                :color="'DARK'"
                :font-weight="'NORMAL'"
                :align-text="'LEFT'"
              >
                {{ shop.email }}
              </app-text>
              <a
                :href="shop.mapLink"
                target="_blank"
                class="text-sm group-hover:text-gold decoration-dotted underline"
              >
                показать на карте
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss"></style>
