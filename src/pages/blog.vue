<template>
  <div class="container mt-8 text-center">
    <div v-if="pending" class="text-center">
      <Spinner size="100" thickness="4" />
    </div>
    <div v-else-if="error">error ! {{ error }}</div>
    <div v-else class="posts-container">
      <template v-for="post in posts">
        <NuxtLink :to="`/post/${post.slug}`" class="post">
          <img :src="post.metadata.image.imgix_url" alt="" />
          <div class="content p-3 pb-4">
            <div class="f-26px f-bold f-alegreya-sans">{{ post.title }}</div>
            <div class="f-14px mt-2">{{ post.metadata.description }}</div>
          </div>
        </NuxtLink>
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { data, pending, error } = await useFetch('/api/posts');

const posts: any = data.value.objects;

//
const route = useRoute();

useMeta({
  bodyAttrs: {
    class: route.meta?.animationDir,
  },
});
</script>

<style lang="scss" scoped>
.posts-container {
  columns: 3 200px;
}

.post {
  display: block;
  break-inside: avoid;
  border-radius: 10px;
  overflow: hidden;
  background-color: var(--grey);
  margin-bottom: 20px;

  img {
    width: 100%;
    object-fit: contain;
    background-color: #fff;
  }

  .content {
  }
}
</style>
