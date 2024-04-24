<script setup lang="ts">
import AppText from '@/shared/ui/app-text.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

interface SubNavbarProps {
  navLink?: string
}

const props = defineProps<SubNavbarProps>()
</script>

<template>
  <main class="my-20 min-h-svh">
    <div class="mx-auto px-10 my-10 w-full container">
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
          / {{ props.navLink }}
        </app-text>
      </div>
      <slot />
    </div>
  </main>
</template>

<style scoped lang="scss"></style>
