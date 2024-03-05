<template>
  <div>
    <h1>count: {{ count }}, {{ name }}</h1>
    <h2>double value: {{ doubleValue }}</h2>
    <button @click="store.increment">INCREMENT</button>
    <div v-for="user in users" :key="user.id">
      {{ user.name }}
    </div>
  </div>
</template>

<script setup lang="ts">
import {useCounterStore} from '@/app/providers/store'
import {computed} from 'vue'
import {storeToRefs} from 'pinia'
import {useGetUsersStore} from "@/app/providers/store";

const store = useCounterStore()
const {users} = useGetUsersStore()
const {name, count, doubleCount} = storeToRefs(store)

const doubleValue = computed(() => doubleCount)
</script>

<style lang="scss" scoped></style>
