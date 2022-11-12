<script lang="ts" setup>
const props = defineProps<{
  content: string
}>()
</script>

<template>
  <Meta property="og:image" :content="props.content" />
  <Meta name="twitter:image" :content="props.content" />
</template>
