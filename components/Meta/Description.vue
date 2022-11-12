<script lang="ts" setup>
const props = defineProps<{
  content: string
}>()
</script>

<template>
  <Meta name="description" :content="props.content" />
  <Meta property="og:description" :content="props.content" />
  <Meta name="twitter:description" :content="props.content" />
  <Meta name="twitter:card" content="summary_large_image" />
</template>
