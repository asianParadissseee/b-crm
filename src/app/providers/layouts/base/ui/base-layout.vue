<template>
  <app-navbar/>
  <slot></slot>
  <app-footer/>
</template>

<script setup lang="ts">

import {AppNavbar} from "@/widgets/navbar";
import {AppFooter} from "@/widgets/footer";
</script>

<style lang="scss" scoped>

</style>