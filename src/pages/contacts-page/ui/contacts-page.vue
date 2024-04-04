<script setup lang="ts">
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import AppText from '@/shared/ui/app-text.vue'
import AppTitle from '@/shared/ui/app-title.vue'
import { ContactsSidebar, useCurrentPageStore } from '@/widgets/contacts/contacts-sidebar'
import { ContactsStores } from '@/widgets/contacts/contacts-stores'
import { ContactsOffice } from '@/widgets/contacts/contacts-office'
import { ContactsCountries } from '@/widgets/contacts/contacts-countries'
import { ContactsService } from '@/widgets/contacts/contacts-service'
import { useTitle } from '@/shared/lib/composables/use-title.ts'

const store = useCurrentPageStore()

const { currentPage } = storeToRefs(store)

const router = useRouter()

const content = [ContactsOffice, ContactsStores, ContactsCountries, ContactsService]

useTitle('Контакты')
</script>

<template>
  <main>
    <div class="container px-5 max-w-9/12 w-full mx-auto my-10">
      <div class="flex flex-col gap-3 mb-5">
        <app-text
          :align-text="'LEFT'"
          :color="'SMOKE'"
        >
          <span
            class="text-dark cursor-pointer"
            @click="router.push('/')"
            >Главная страница</span
          >
          / Каталог
        </app-text>
        <app-title
          :color="'DARK'"
          :align-text="'LEFT'"
          :font-weight="'MEDIUM'"
          :font-size="'XL4'"
        >
          Контакты
        </app-title>
      </div>
      <div class="flex gap-10">
        <contacts-sidebar />
        <component :is="content[currentPage - 1]" />
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss"></style>
