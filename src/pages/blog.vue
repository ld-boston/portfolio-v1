<template>
  <div class="container mt-8 text-center">
    <div v-if="loading" class="text-center">
      <Spinner size="100" thickness="4" />
    </div>
    <div v-else-if="error">error ! {{ error }}</div>
    <div v-else class="posts-container">
      <template v-for="post in posts">
        <router-link :to="{ name: 'blog' }" class="post">
          <img :src="post.metadata?.image?.imgix_url" alt="" />
          <div class="content p-3 pb-4">
            <div class="f-26px f-bold f-alegreya-sans">{{ post.title }}</div>
            <div class="f-14px mt-2">{{ post.metadata?.description }}</div>
          </div>
        </router-link>
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { getPosts } from '@/services/blog-posts';

let loading = ref(true);
let error = ref(false);
let posts = ref<any[]>([]);

onMounted(async () => {
  let res = await getPosts();
  loading.value = false;
  error.value = !res.success;
  posts.value = res.posts.objects;
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
