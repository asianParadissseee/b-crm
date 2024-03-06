<template>
  <header class="w-full min-h-20 flex flex-col">
    <div class="bg-lightAsh">
      <div class="container px-5 max-w-9/12 w-full h-10 mx-auto flex items-center justify-between">
        <div class="flex items-center gap-4">
          <img
            :src="GeoOrangeIcon"
            alt="geolocation icon"
            width="12"
            height="14"
          />
          <app-text :font-weight="'MEDIUM'" :color="'DARK'" :align-text="'CENTER'" :font-size="'BASE'">
            Алматы
          </app-text>
        </div>
        <nav class="flex items-center justify-between gap-10">
          <div>
            <img
              :src="WhatsAppIcon"
              alt="whats app icon"
              width="24"
              height="24"
            />
          </div>
          <div>
            <img
              :src="EmailIcon"
              alt="email icon"
              width="12"
              height="12"
            />
          </div>
          <div>
            <img
              :src="TelephoneIcon"
              alt="telephone icon"
              width="12"
              height="12"
            />
          </div>
        </nav>
      </div>
    </div>
    <div class="container px-5 max-w-9/12 w-full mx-auto flex items-center justify-between py-5">
      <app-logo />
      <app-input />
      <div @click="handleHref(hrefAttr.TELEPHONE, '+7 (495) 103-48-50')" class="cursor-pointer">
        <app-text :font-size="'BASE'" :align-text="'CENTER'" :color="'DARK'" :font-weight="'NORMAL'">
          +7 (495) 103-48-50
        </app-text>
      </div>
      <div class="flex items-center gap-4">
        <div><img :src="HeartLarge" alt="img for heart of large size" width="24" height="20"></div>
        <div><img :src="CardShopIcon" alt="img for card shop" width="24" height="15"></div>
        <div><img :src="UserLarge" alt="img for user of large size" width="21" height="24"></div>
      </div>
    </div>
  </header>
  <nav class="w-full mx-auto bg-gold">
    <ul class="flex container mx-auto justify-between items-center py-3">
      <li
        v-for="(link, id) in routerLinks"
        :key="link.path"
        class="flex items-center gap-10"
      >
        <app-link
          :to="link.path"
          :color="'DARK'"
          :align-text="'CENTER'"
          :font-size="'BASE'"
        >
          {{ link.name.toUpperCase() }}
        </app-link>
        <span
          v-if="id < routerLinks.length - 1"
          class="ml-10 h-5 w-0.5 bg-dark hidden xl:block"
        ></span>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import GeoOrangeIcon from '@/shared/assets/icons/orange-geo.svg'
import TelephoneIcon from '@/shared/assets/icons/telephone-icon.svg'
import WhatsAppIcon from '@/shared/assets/icons/whatsapp.svg'
import EmailIcon from '@/shared/assets/icons/email.svg'
import UserLarge from "@/shared/assets/icons/user-large.svg"
import CardShopIcon from "@/shared/assets/icons/card-shop.svg"
import HeartLarge from "@/shared/assets/icons/heart-large.svg"
import AppLink from '@/shared/ui/app-link.vue'
import AppLogo from '@/shared/ui/app-logo.vue'
import AppInput from '@/shared/ui/app-input.vue'
import AppText from '@/shared/ui/app-text.vue'
import { handleHref, hrefAttr } from '@/shared/lib/href.ts'


const routerLinks = [
  {
    name: 'Каталог',
    path: '/catalog'
  },
  {
    name: 'О компании',
    path: '/about-company'
  },
  {
    name: 'Акции',
    path: '/stocks'
  },
  {
    name: 'Статьи',
    path: '/articles'
  },
  {
    name: 'Новости',
    path: '/news'
  },
  {
    name: 'Доставка и оплата',
    path: '/delivery'
  },
  {
    name: 'Контакты',
    path: '/contacts'
  }
]
</script>

<style lang="scss" scoped></style>
