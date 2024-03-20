<script setup lang="ts">
import AppText from '@/shared/ui/app-text.vue'
import AppTitle from '@/shared/ui/app-title.vue'
</script>

<template>
  <main>
    <div class="container mx-auto px-5">
      <div class="flex flex-col gap-y-9 my-5">
        <app-text
          :align-text="'LEFT'"
          :color="'SMOKE'"
        >
          <span class="text-dark">Главная страница</span>
          / Каталог
        </app-text>
        <app-title
          :color="'DARK'"
          :font-weight="'MEDIUM'"
          :font-size="'XL4'"
        >
          НОВОСТИ
        </app-title>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss"></style>
