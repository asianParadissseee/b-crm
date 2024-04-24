<script setup lang="ts">
import { storeToRefs } from 'pinia'
import AppModal from '@/shared/ui/app-modal.vue'
import AppTitle from '@/shared/ui/app-title.vue'
import AppText from '@/shared/ui/app-text.vue'
import AppInput from '@/shared/ui/app-input.vue'
import AppButton from '@/shared/ui/app-button.vue'
import { useWindowSize } from '@/shared/lib/composables/use-window.ts'
import { useBackcallStore } from '../models/store/backcall.store.ts'

const { isResponsive } = useWindowSize(1024)

const store = useBackcallStore()
const { backCallState } = storeToRefs(store)
const { getBackCallDto } = useBackcallStore()

const handleSubmitData = async (e: Event) => {
  e.preventDefault()
  await getBackCallDto(backCallState.value.dto)
}
</script>

<template>
  <app-modal>
    <div class="flex flex-col gap-5">
      <app-title
        :font-size="isResponsive ? 'XL2' : 'XL4'"
        :align-text="'CENTER'"
        :font-weight="'MEDIUM'"
      >
        ОБРАТНЫЙ ЗВОНОК
      </app-title>
      <app-text
        :font-weight="'NORMAL'"
        :align-text="'CENTER'"
        :font-size="'XS'"
        :color="'SMOKE'"
        >Оставьте свои контакты и наш менеджер свяжется с вами ближайшее время
      </app-text>
    </div>
    <form
      class="flex flex-col gap-7 my-5"
      @submit="handleSubmitData"
    >
      <app-input
        :placeholder="'Введите имя'"
        :size="'DESKTOP'"
      />
      <app-input
        :placeholder="'Введите телефон *'"
        :size="'DESKTOP'"
      />
      <div class="flex justify-center items-center">
        <app-button
          :align="'CENTER'"
          :size="'LARGE'"
          :color="'PRIMARY'"
        >
          заказать обратный звонок
        </app-button>
      </div>
    </form>
    <app-text
      :font-size="'XS'"
      :align-text="'CENTER'"
      :font-weight="'NORMAL'"
      :color="'SMOKE'"
    >
      Нажимая на кнопку “Заказать обратный звонок” вы соглашаетесь с нашей <br />
      <span class="text-dark">политикой конфиденциальности</span>
    </app-text>
  </app-modal>
</template>

<style scoped lang="scss"></style>
