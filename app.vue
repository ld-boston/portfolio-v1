<script lang="ts" setup></script>

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
