<script setup lang="ts">
import AppModal from '@/shared/ui/app-modal.vue'
import AppTitle from '@/shared/ui/app-title.vue'
import AppText from '@/shared/ui/app-text.vue'
import AppInput from '@/shared/ui/app-input.vue'
import AppButton from '@/shared/ui/app-button.vue'
</script>

<template>
  <app-modal>
    <div class="flex flex-col gap-5">
      <app-title
        :font-size="'XL4'"
        :align-text="'CENTER'"
        :font-weight="'MEDIUM'"
        >ОБРАТНЫЙ ЗВОНОК</app-title
      >
      <app-text
        :font-weight="'NORMAL'"
        :align-text="'CENTER'"
        :font-size="'XS'"
        :color="'SMOKE'"
        >Оставьте свои контакты и наш менеджер свяжется с вами ближайшее время
      </app-text>
    </div>
    <form class="flex flex-col gap-7 my-5">
      <app-input
        :placeholder="'Введите имя'"
        :size="'DESKTOP'"
      />
      <app-input
        :placeholder="'Введите телефон *'"
        :size="'DESKTOP'"
      />
      <app-button> заказать обратный звонок </app-button>
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
