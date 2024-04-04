<template>
  <suspense>
    <template #default>
      <router-view></router-view>
    </template>
    <template #fallback> Загрузка страницы </template>
  </suspense>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
