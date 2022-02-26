<template>
  <div class="post-container mt-5">
    <div v-if="loading"><Spinner /></div>
    <div v-else-if="error">
      <h2>{{ error }}</h2>
    </div>
    <template v-else>
      <h1 class="f-40px">{{ post.title }}</h1>
      <div class="text-center">
        <img
          :src="post.metadata?.image?.imgix_url"
          style="max-width: 100%; max-height: 422px; object-fit: scale-down"
          alt=""
        />
      </div>
      <div v-html="post.content"></div>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useHead } from '@vueuse/head';
import { getPost } from '@/services/blog-posts';

const route = useRoute();

const loading = ref(true);
const error = ref(false);
const post = ref<any>(null);

const pageTitle = computed(() =>
  !loading.value && !error.value
    ? `L.D. Boston | ${post.value?.title}`
    : 'L.D. Boston',
);
const pageDescription = computed(() =>
  !loading.value && !error.value
    ? post.value.metadata?.description
    : 'L.D. Boston blog post',
);
const pageImage = computed(() =>
  !loading.value && !error.value
    ? post.value.metadata?.image?.imgix_url
    : '/img/base-social.jpg',
);
useHead({
  title: pageTitle,
  meta: [
    {
      property: 'og:title',
      content: pageTitle,
    },
    {
      name: 'twitter:title',
      content: pageTitle,
    },
    //
    {
      name: 'description',
      content: pageDescription,
    },
    {
      property: 'og:description',
      content: pageDescription,
    },
    {
      name: 'twitter:description',
      content: pageDescription,
    },
    //
    {
      property: 'og:image',
      content: pageImage,
    },
    {
      name: 'twitter:image',
      content: pageImage,
    },
  ],
});

onMounted(async () => {
  let res = await getPost(route.params.slug.toString());
  loading.value = false;
  error.value = !res.success;
  post.value = res.post;
});
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
