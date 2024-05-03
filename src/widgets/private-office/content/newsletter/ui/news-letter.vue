<script setup lang="ts">
import AppTitle from '@/shared/ui/app-title.vue'
import AppInput from '@/shared/ui/app-input.vue'
</script>

<template>
  <app-title
    font-size="BASE"
    font-weight="MEDIUM"
  >
    {{ 'Ваши подписки'.toUpperCase() }}
  </app-title>
  <div class="mt-4 w-96">
    <div class="flex flex-col gap-3">
      <app-title
        font-size="SM"
        font-weight="MEDIUM"
      >
        E-mail который участвует в рассылке:
      </app-title>
      <app-input
        placeholder="ivan@mail.ru"
        size="TABLET"
      />
    </div>
    <div class="mt-7">
      <app-title
        font-size="SM"
        font-weight="MEDIUM"
      >
        Выберите типы подписок, интересных вам:
      </app-title>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
