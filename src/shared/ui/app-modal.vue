<script setup lang="ts">

</script>

<template>
  <teleport to="body">
    <div
      class="fixed top-0 right-0 left-0 z-50 w-screen bg-dark h-svh overflow-hidden flex justify-center items-center opacity-60 ">
      <div class="w-1/3 h-96 bg-white z-50 rounded-2xl opacity-100 p-10">
        <slot></slot>
      </div>
    </div>
  </teleport>
</template>

<style scoped lang="scss">

</style>
