<script lang="ts" setup>
const router = useRouter()

router.beforeEach((to, from) => {
  if (typeof to.meta.pageTransition == 'boolean') return

  to.meta.pageTransition = from.meta.pageTransition = {
    name: 'fade',
    mode: 'out-in',
  }

  if (!to.meta.transitionIndex || !from.meta.transitionIndex) return
  to.meta.pageTransition.name =
    to.meta.transitionIndex > from.meta.transitionIndex
      ? 'slide-right'
      : 'slide-left'
  from.meta.pageTransition.name =
    to.meta.transitionIndex > from.meta.transitionIndex
      ? 'slide-left'
      : 'slide-right'
})
</script>

<template>
  <Html lang="en" />
  <Head>
    <Link rel="icon" href="/favicon.ico" type="image/x-icon" />

    <!-- meta -->
    <MetaTitle content="L.D. Boston" />
    <MetaDescription content="L.D. Boston's Website" />
    <MetaImage content="https://www.ld-boston.cf/img/base-social.jpg" />
  </Head>

  <!--  -->
  <NuxtLoadingIndicator :color="'var(--primary)'" />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
