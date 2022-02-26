<template>
  <Head>
    <!-- title -->
    <title>{{ meta.title }}</title>
    <meta property="og:title" :content="meta.title" />
    <meta name="twitter:title" :content="meta.title" />

    <!-- description -->
    <meta name="description" :content="meta.description" />
    <meta property="og:description" :content="meta.description" />
    <meta name="twitter:description" :content="meta.description" />
    <meta name="twitter:card" content="summary_large_image" />

    <!-- image -->
    <meta
      property="og:image"
      content="https://www.ld-boston.cf/img/base-social.jpg"
    />
    <meta
      name="twitter:image"
      content="https://www.ld-boston.cf/img/base-social.jpg"
    />
  </Head>
  <router-view />
</template>

<script lang="ts" setup>
import { computed, reactive } from 'vue';
import { Head } from '@vueuse/head';
import { useRoute } from 'vue-router';

const route = useRoute();

const meta = reactive({
  title: computed(() => (route.meta.title as string) ?? 'L.D. Boston'),
  description: computed(
    () => (route.meta.description as string) ?? "L.D. Boston's Website",
  ),
});
</script>
