<script setup lang="ts">
import AppText from '@/shared/ui/app-text.vue'
import AppTitle from '@/shared/ui/app-title.vue'
import AppButton from '@/shared/ui/app-button.vue'
</script>

<template>
  <div class="min-w-96 rounded min-h-96 p-10 grid grid-cols-1 gap-1 border border-ash">
    <app-title
      font-size="XL2"
      font-weight="MEDIUM"
    >
      Сейчас в корзине
    </app-title>
    <div class="flex flex-col gap-3">
      <app-text font-size="SM"
        >Товаров: <span>{{ 0 }}</span></app-text
      >
      <app-text font-size="SM"
        >На сумму: <span>{{ 0 }}</span></app-text
      >
    </div>
    <hr class="h-0.5 text-ash" />
    <div class="flex flex-col gap-3">
      <app-button color="SECONDARY">перейти в корзину</app-button>
      <app-button color="PRIMARY">оформить заказ</app-button>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
