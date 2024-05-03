<script setup lang="ts">
import { reactive } from 'vue'
import { storeToRefs } from 'pinia'
import AppText from '@/shared/ui/app-text.vue'
import { useCurrentOfficeStore } from '../models/store/current-office.store.ts'

const store = useCurrentOfficeStore()
const { setCurrentOfficePage } = store
const { currentOfficePage } = storeToRefs(store)
const links = reactive([
  {
    link: 'Личные данные',
    setCurrentPage: () => setCurrentOfficePage(1)
  },
  {
    link: 'Рассылки',
    setCurrentPage: () => setCurrentOfficePage(2)
  }
])
</script>

<template>
  <nav class="grid grid-cols-4 rounded">
    <div
      :class="[
        'border hover:bg-gold transition-all duration-200 cursor-pointer  border-ash px-6 py-3',
        id + 1 === currentOfficePage ? 'bg-gold' : 'bg-transparent'
      ]"
      v-for="(link, id) in links"
      @click="link.setCurrentPage"
      :key="id"
    >
      <app-text align-text="CENTER">
        {{ link.link }}
      </app-text>
    </div>
  </nav>
</template>

<style scoped lang="scss"></style>
