<template>
  <div class="w-10 h-10 block bg-gold rounded flex justify-center items-center">
    <img
      :src="BurgerIcon"
      alt="icon of burger"
      width="16"
      height="16"
    />
  </div>
</template>

<script setup lang="ts">
import BurgerIcon from '@/shared/assets/icons/burger.svg'
</script>

<style lang="scss" scoped></style>
