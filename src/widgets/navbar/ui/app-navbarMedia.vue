<script setup lang="ts">
import AppLogo from '@/shared/ui/app-logo.vue'
import WhatsAppIcon from '@/shared/assets/icons/whatsapp.svg'
import AppText from '@/shared/ui/app-text.vue'
import GeoOrangeIcon from '@/shared/assets/icons/orange-geo.svg'
import AppInput from '@/shared/ui/app-input.vue'
import AppBurger from '@/shared/ui/app-burger.vue'
import { useSidebarStore } from '@/widgets/sidebar'

const store = useSidebarStore()

const { handleShowSidebar } = store
</script>

<template>
  <header>
    <div class="container px-5 max-w-9/12 w-full mx-auto flex justify-between items-center">
      <app-logo />
      <div class="hidden md:flex gap-3">
        <img
          :src="WhatsAppIcon"
          alt="whats app icon"
          width="24"
          height="24"
        />
        <app-text
          :font-size="'BASE'"
          :align-text="'CENTER'"
          :color="'DARK'"
          :font-weight="'NORMAL'"
        >
          Напишите нам в WhatsApp
        </app-text>
      </div>
      <app-text> +7 (495) 103-48-50</app-text>
      <div class="hidden md:block">
        <img
          :src="GeoOrangeIcon"
          alt="icon of geolocation"
          width="12"
          height="14"
        />
      </div>
    </div>
    <div class="md:hidden container px-5 max-w-9/12 w-full mx-auto flex my-5 justify-between items-center">
      <div>
        <img
          :src="GeoOrangeIcon"
          alt="icon of geolocation"
          width="20"
          height="24"
        />
      </div>
      <div class="md:hidden flex gap-3">
        <img
          :src="WhatsAppIcon"
          alt="whats app icon"
          width="24"
          height="24"
        />
        <app-text
          :font-size="'BASE'"
          :align-text="'CENTER'"
          :color="'DARK'"
          :font-weight="'NORMAL'"
        >
          Напишите нам в WhatsApp
        </app-text>
      </div>
    </div>
    <div class="container px-5 max-w-9/12 w-full mx-auto flex justify-between items-center mt-7">
      <app-burger @click="handleShowSidebar" />
      <app-input
        is-icon
        :border-color="'GOLD'"
        :size="'TABLET'"
      />
    </div>
  </header>
</template>

<style scoped lang="scss"></style>
