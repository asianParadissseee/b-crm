<template>
  <main class="mt-20">
    <div class="container px-5 max-w-9/12 w-full mx-auto flex flex-col lg:grid grid-rows-3 grid-flow-col gap-4">
      <div class="row-span-3">
        <category-sidebar />
      </div>
      <div class="col-span-2">
        <app-slider />
      </div>
      <div class="row-span-2 col-span-2 mt-14">
        <div class="flex gap-14 items-center">
          <valuation-cards />
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { CategorySidebar } from '@/widgets/category-sidebar'
import { AppSlider } from '@/widgets/slider'
import { ValuationCards } from '@/widgets/valuation-cards'
</script>

<style lang="scss" scoped></style>
