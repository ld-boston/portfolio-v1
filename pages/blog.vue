<script lang="ts" setup>
definePageMeta({ transitionIndex: 4 })

const { data, pending, error } = useFetch('/api/posts')
</script>

<template>
  <div class="container mt-8 text-center" style="max-width: 1000px">
    <MetaTitle content="L.D. Boston - Blog" />

    <div v-if="pending" class="text-center mt-6">
      <Spinner size="80" thickness="4" />
    </div>
    <div v-else-if="error">
      Error loading blog posts <br />
      Please try again later <br />
      {{ error }}
    </div>
    <!--  -->
    <div v-else class="posts-container row">
      <div v-for="post in data.objects" class="md:col-6 col-12">
        <NuxtLink :to="post.slug" class="post">
          <div class="img-container">
            <img :src="post.metadata?.image?.imgix_url" alt="" />
          </div>
          <div class="content p-3 pb-4">
            <div class="f-26px f-bold f-alegreya-sans">{{ post.title }}</div>
            <div class="f-14px mt-2">{{ post.metadata?.description }}</div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

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
