<script setup lang="ts">
import AppInput from '@/shared/ui/app-input.vue'
import { useAuthStore } from '../models/store/auth.store.ts'
import { storeToRefs } from 'pinia'
import AppButton from '@/shared/ui/app-button.vue'

const store = useAuthStore()
const { authState } = storeToRefs(store)
const { getAuthDto } = store
console.log(getAuthDto)
console.log('auth values', authState)
</script>

<template>
  <form class="my-20 p-10 flex flex-col gap-3">
    <app-input
      :size="'DESKTOP'"
      placeholder="Введите почту"
      :border-color="'COAL'"
    />
    <app-input
      :size="'DESKTOP'"
      placeholder="Введите ФИО"
      :border-color="'COAL'"
    />
    <app-input
      :size="'DESKTOP'"
      placeholder="Введите номер телефона"
      :border-color="'COAL'"
    />
    <app-input
      :size="'DESKTOP'"
      placeholder="Введите пароль"
      :border-color="'COAL'"
    />
    <app-button
      :size="'LARGE'"
      :color="'PRIMARY'"
      :align="'CENTER'"
    >
      авторизоваться
    </app-button>
  </form>
</template>

<style scoped lang="scss"></style>
