<template>
  <div>
    {{ props.title}}
  </div>
</template>

<script setup lang="ts">

import { ArticlesResponse } from '@/entity/articles'

const props = defineProps<ArticlesResponse>()

</script>

<style scoped></style>
