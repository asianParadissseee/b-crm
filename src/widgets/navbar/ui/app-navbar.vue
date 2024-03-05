<template>
  <header class="w-full min-h-20 flex flex-col">
    <div class="container px-5 max-w-9/12 w-full mx-auto"></div>
    <div class="container px-5 max-w-9/12 w-full mx-auto"></div>
  </header>
  <nav class="w-full mx-auto bg-gold">
    <ul class="flex container mx-auto justify-between items-center py-3">
      <li
        v-for="(link,id) in routerLinks"
        :key="link.path"
        class="flex items-center gap-10"
      >
        <router-link :to="link.path">
          {{ link.name.toUpperCase() }}
        </router-link>
        <span v-if="id < routerLinks.length - 1" class="ml-10 h-5 w-0.5 bg-dark hidden xl:block"></span>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
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
