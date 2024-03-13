<template>
  <main class="mt-20">
    <div class="container px-5 max-w-9/12 w-full mx-auto grid grid-rows-3 grid-flow-col gap-4">
      <div class="row-span-3">
        <category-sidebar />
      </div>
      <div class="col-span-2">
        <app-slider />
      </div>
      <div class="row-span-2 col-span-2">03</div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { CategorySidebar } from '@/widgets/category-sidebar'
import { AppSlider } from '@/widgets/slider'
</script>

<style lang="scss" scoped></style>
