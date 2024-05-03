<script setup lang="ts">
import AppTitle from '@/shared/ui/app-title.vue'
import AppText from '@/shared/ui/app-text.vue'
import AppInput from '@/shared/ui/app-input.vue'
import AppButton from '@/shared/ui/app-button.vue'
import PenIcon from '@/shared/assets/icons/pen-icon.svg'

const contactData = [
  { label: 'Ф.И.О', value: 'Артем' },
  { label: 'E-Mail', value: 'a.trockiy@bk.ru' },
  { label: 'Мобильный телефон', value: '+7 919 116-13-13' }
]
</script>

<template>
  <div>
    <app-title
      font-size="SM"
      font-weight="MEDIUM"
      >Контактное лицо</app-title
    >
    <div class="flex flex-col gap-4 mt-4 max-w-96">
      <div
        v-for="(item, id) in contactData"
        :key="id"
        class="flex items-center justify-between"
      >
        <div class="flex flex-col">
          <AppText
            font-size="BASE"
            color="ASH"
            >{{ item.label }}</AppText
          >
          <AppText font-size="BASE">{{ item.value }}</AppText>
        </div>
        <div>
          <img
            :src="PenIcon"
            alt="иконка серого карандаша"
            width="24"
            height="24"
          />
        </div>
      </div>
    </div>
  </div>
  <div class="mt-10">
    <app-title
      font-size="SM"
      font-weight="MEDIUM"
      >Изменить пароль</app-title
    >
    <form class="w-96 flex flex-col gap-5 mt-5">
      <AppInput
        placeholder="Введите новый пароль"
        size="TABLET"
      />
      <AppInput
        placeholder="Подтвердите новый пароль"
        size="TABLET"
      />
      <AppButton
        color="PRIMARY"
        size="LARGE"
        >Сохранить изменения</AppButton
      >
    </form>
  </div>
</template>

<style scoped lang="scss"></style>
