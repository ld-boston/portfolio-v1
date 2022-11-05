<script lang="ts" setup>
import { Head } from '@vueuse/head'
import { useRoute } from 'vue-router'

const route = useRoute()

const meta = reactive({
  title: computed(() => (route.meta.title as string) ?? 'L.D. Boston'),
  description: computed(
    () => (route.meta.description as string) ?? "L.D. Boston's Website",
  ),
})
</script>

<template>
  <Html lang="en" />
  <Head>
    <Link rel="icon" href="/favicon.ico" type="image/x-icon" />

    <!-- title -->
    <Title>{{ meta.title }}</Title>
    <Meta property="og:title" :content="meta.title" />
    <Meta name="twitter:title" :content="meta.title" />

    <!-- description -->
    <Meta name="description" :content="meta.description" />
    <Meta property="og:description" :content="meta.description" />
    <Meta name="twitter:description" :content="meta.description" />
    <Meta name="twitter:card" content="summary_large_image" />

    <!-- image -->
    <Meta
      property="og:image"
      content="https://www.ld-boston.cf/img/base-social.jpg"
    />
    <Meta
      name="twitter:image"
      content="https://www.ld-boston.cf/img/base-social.jpg"
    />
  </Head>

  <!--  -->
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
