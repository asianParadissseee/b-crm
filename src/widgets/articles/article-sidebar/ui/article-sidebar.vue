<script setup lang="ts">
import AppText from '@/shared/ui/app-text.vue'
import AppInput from '@/shared/ui/app-input.vue'
</script>

<template>
  <aside class="bg-lightAsh sticky w-96 h-80 px-7 py-3 rounded">
    <div class="flex justify-start items-start flex-col">
      <div class="flex flex-col gap-2">
        <app-text
          :color="'DARK'"
          :font-size="'SM'"
          :font-weight="'MEDIUM'"
        >
          Поиск по тексту
        </app-text>
        <app-input placeholder="Что вы ищете?" />
      </div>
    </div>
  </aside>
</template>

<style scoped lang="scss"></style>
