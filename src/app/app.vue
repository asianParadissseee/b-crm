<template>
  <div>
    <h1>count:
      {{ count }}, {{ name }}
    </h1>
    <h2>
      double value: {{ doubleValue }}
    </h2>
    <button @click="store.increment">
      INCREMENT
    </button>
  </div>
</template>

<script setup lang="ts">

import {useCounterStore} from "@/app/providers/store/counter.ts";
import {computed} from "vue";
import {storeToRefs} from "pinia";

const store = useCounterStore()
const {name, count, doubleCount} = storeToRefs(store)

const doubleValue = computed(() => doubleCount)

</script>

<style lang="scss" scoped></style>
