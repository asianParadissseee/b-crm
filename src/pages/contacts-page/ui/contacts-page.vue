<script setup lang="ts">
import { storeToRefs } from 'pinia'
import AppTitle from '@/shared/ui/app-title.vue'
import { ContactsSidebar, useCurrentPageStore } from '@/widgets/contacts/contacts-sidebar'
import { ContactsStores } from '@/widgets/contacts/contacts-stores'
import { ContactsOffice } from '@/widgets/contacts/contacts-office'
import { ContactsCountries } from '@/widgets/contacts/contacts-countries'
import { ContactsService } from '@/widgets/contacts/contacts-service'
import { useTitle } from '@/shared/lib/composables/use-title.ts'
import { LayoutNav } from '@/widgets/navbar'

const store = useCurrentPageStore()

const { currentPage } = storeToRefs(store)

const content = [ContactsOffice, ContactsStores, ContactsCountries, ContactsService]

useTitle('Контакты')
</script>

<template>
  <layout-nav nav-link="Новости">
    <app-title
      :color="'DARK'"
      :align-text="'LEFT'"
      :font-weight="'MEDIUM'"
      :font-size="'XL4'"
    >
      Контакты
    </app-title>
    <div class="flex gap-10">
      <contacts-sidebar />
      <component :is="content[currentPage - 1]" />
    </div>
  </layout-nav>
</template>

<style scoped lang="scss"></style>
