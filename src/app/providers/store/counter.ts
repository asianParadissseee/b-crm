import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useCounterStore = defineStore('counter', () => {
  const count = ref<number>(1) //state
  const name = ref<string>('Eduardo') //state
  const doubleCount = computed<number>(() => count.value * 2) // getters

  function increment() {
    //action
    count.value++
  }

  return {
    count,
    name,
    doubleCount,
    increment
  }
})
