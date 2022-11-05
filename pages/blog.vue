<template>
  <div class="container mt-8 text-center" style="max-width: 1000px">
    {{ data }}
    <!-- <div v-if="loading" class="text-center mt-6">
      <Spinner size="80" thickness="4" />
    </div>
    <div v-else-if="error">error ! {{ error }}</div>
    <div v-else class="posts-container row">
      <div v-for="post in posts" class="md:col-6 col-12">
        <router-link
          :to="{ name: 'blog-post', params: { slug: post.slug } }"
          class="post"
        >
          <div class="img-container">
            <img :src="post.metadata?.image?.imgix_url" alt="" />
          </div>
          <div class="content p-3 pb-4">
            <div class="f-26px f-bold f-alegreya-sans">{{ post.title }}</div>
            <div class="f-14px mt-2">{{ post.metadata?.description }}</div>
          </div>
        </router-link>
      </div>
    </div> -->
  </div>
</template>

<script lang="ts" setup>
// import { onMounted, ref } from 'vue';
// import { getPosts } from '@/services/blog-posts';

// let loading = ref(true);
// let error = ref(false);
// let posts = ref<any[]>([]);

// onMounted(async () => {
//   let res = await getPosts();
//   loading.value = false;
//   error.value = !res.success;
//   posts.value = res.posts.objects;
// });

const { data } = useAsyncData('blog-posts', async () => {
  let res
  try {
    res = await cosmicBucket.getObjects({
      query: {
        type: 'posts',
      },
      props: 'slug,title,content,metadata',
    })
  } catch (error) {
    console.log(error)

    return
  }

  return {
    success: true,
    posts: res.objects,
  }
})
</script>

<style lang="scss" scoped>
.post {
  display: block;
  break-inside: avoid;
  border-radius: 10px;
  overflow: hidden;
  background-color: var(--grey);
  margin-bottom: 20px;

  .img-container {
    width: 100%;
    padding-top: 55%;
    position: relative;

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      background-color: #fff;
    }
  }

  .content {
  }
}
</style>
