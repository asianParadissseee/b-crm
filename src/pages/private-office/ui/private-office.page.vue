<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { LayoutNav } from '@/widgets/navbar'
import { NavigationPrivateOffice, useCurrentOfficeStore } from '@/widgets/private-office/navigation'
import { CardShopPrivateOffice } from '@/widgets/private-office/card-shop'
import { PersonalData } from '@/widgets/private-office/content/personal-data'
import { NewsLetter } from '@/widgets/private-office/content/newsletter'
import AppTitle from '@/shared/ui/app-title.vue'
import { useTitle } from '@/shared/lib/composables/use-title.ts'

const store = useCurrentOfficeStore()
const { currentOfficePage } = storeToRefs(store)
const components = [PersonalData, NewsLetter]
useTitle('Личный кабинет')
</script>

<template>
  <layout-nav nav-link="Личный кабинет">
    <app-title
      font-weight="MEDIUM"
      font-size="XL4"
    >
      Мой профиль
    </app-title>
    <section class="my-20 flex justify-between">
      <div class="flex flex-col gap-3">
        <navigation-private-office />
        <div class="w-full min-h-96 p-5 border rounded border-ash">
          <component :is="components[currentOfficePage - 1]" />
        </div>
      </div>
      <div>
        <card-shop-private-office />
      </div>
    </section>
  </layout-nav>
</template>

<style scoped lang="scss"></style>
