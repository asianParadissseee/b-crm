<script setup lang="ts">
import { AuthForm } from '@/features/auth'
import { useTitle } from '@/shared/lib/composables/use-title.ts'

useTitle('Авторизация')
</script>

<template>
  <main class="my-20 min-h-svh">
    <div class="container mx-auto px-5 max-w-9/12 w-full">
      <auth-form />
    </div>
  </main>
</template>

<style scoped lang="scss"></style>
