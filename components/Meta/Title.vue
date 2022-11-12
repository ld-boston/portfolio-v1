<script lang="ts" setup>
const props = defineProps<{
  content: string
}>()
</script>

<template>
  <Title>{{ props.content }}</Title>
  <Meta property="og:title" :content="props.content" />
  <Meta name="twitter:title" :content="props.content" />
</template>
