<template>
  <main class="mt-20">
    <div class="container px-5 max-w-9/12 w-full mx-auto flex flex-col lg:grid lg:grid-rows-3 lg:grid-cols-3 gap-4">
      <div class="lg:row-span-3">
        <category-sidebar />
      </div>
      <div class="lg:col-span-2">
        <app-slider />
      </div>
      <div class="lg:row-span-2 lg:col-span-2 mt-14">
        <div class="flex flex-row lg:gap-14 items-center justify-center">
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
