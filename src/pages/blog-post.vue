<template>
  <div class="post-container mt-5">
    <div v-if="pending"><Spinner /></div>
    <div v-else-if="error">
      <h2>{{ error }}</h2>
    </div>
    <template v-else>
      <h1 class="f-40px">{{ data.title }}</h1>
      <div v-html="data.content"></div>
      <div>{{ data }}</div>
    </template>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();

const { data, pending, error } = await useFetch<any>(
  `/api/post?slug=${route.params.slug}`,
);
</script>

<style lang="scss" scoped>
.post-container {
  max-width: 670px;
  margin-left: auto;
  margin-right: auto;

  ::v-deep(img) {
    max-width: 100%;
  }
}
</style>
