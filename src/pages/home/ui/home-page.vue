<template>
  <div>
    <app-link
      to="lox"
      :font-size="'XXL'"
      :align-text="'LEFT'"
      :color="'ALERT'"
    >
      hello
    </app-link>
  </div>
</template>

<script lang="ts" setup>
import AppLink from '@/shared/ui/app-link.vue'
</script>

<style lang="scss" scoped></style>
