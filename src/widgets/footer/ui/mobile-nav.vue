<script setup lang="ts">
import CatalogOrangeIcon from '@/shared/assets/icons/catalog_orange.svg'
import HomeOrangeIcon from '@/shared/assets/icons/home-orange.svg'
import HeartIcon from '@/shared/assets/icons/heart-large.svg'
import CardShopIcon from '@/shared/assets/icons/card-shop-orange_small.svg'
import UserIcon from '@/shared/assets/icons/user-large.svg'
import MenuIcon from '@/shared/assets/icons/menu.svg'
import AppText from '@/shared/ui/app-text.vue'

const navigation = [
  {
    icon: CatalogOrangeIcon,
    name: 'Домой',
    link: '/'
  },
  {
    icon: HomeOrangeIcon,
    name: 'Каталог',
    link: '/catalog'
  },
  {
    icon: HeartIcon,
    name: 'Избранное',
    link: '/'
  },
  {
    icon: CardShopIcon,
    name: 'Корзина',
    link: '/'
  },
  {
    icon: UserIcon,
    name: 'Вход',
    link: '/'
  },
  {
    icon: MenuIcon,
    name: 'Еще',
    link: '/'
  }
]
</script>

<template>
  <footer class="absolute bottom-0 right-0 left-0 z-50 bg-white">
    <hr class="mb-10 shadow-2xl" />
    <nav class="flex justify-between px-5 items-center container w-full mx-auto">
      <div
        class="flex flex-col gap-3"
        v-for="(nav, id) in navigation"
        :key="id"
      >
        <img
          :src="nav.icon"
          alt="icon of link"
          width="24"
          height="24"
        />
        <app-text
          :font-weight="'NORMAL'"
          :color="'DARK'"
          :align-text="'CENTER'"
          :font-size="'XS'"
        >
          {{ nav.name }}
        </app-text>
      </div>
    </nav>
  </footer>
</template>

<style scoped lang="scss"></style>
