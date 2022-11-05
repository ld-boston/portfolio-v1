<script lang="ts" setup></script>

<template>
  <div class="container">
    <div class="row my-3 md:py-4 lg:py-5">
      <div
        class="md:col-6 order-1 md:order-0 text-center md:text-left md:mt-2 lg:mt-4 xl:mt-6"
      >
        <p class="f-alegreya f-28px md:f-35px xl:f-50px md:my-2 lg:my-3">
          Hello!
        </p>
        <h1 class="f-alegreya my-0 f-44px md:f-3xl lg:f-6xl xl:f-7xl xl:my-4">
          I am L.D. Boston
        </h1>
        <p class="f-19 md:f-22px lg:f-28px xl:f-32px">
          I'm a sci-fi author from the future
        </p>
        <p class="f-16 md:f-18px lg:f-20px xl:f-26px xl:pt-4">
          My life centers around creating entertaining stories and guiding
          others in writing theirs.
        </p>
        <NuxtLink
          class="btn btn-primary f-16px md:f-18px lg:f-20px xl:f-24px xl:py-4 xl:px-7 md:mt-3 xl:mt-4"
          to="/books"
        >
          See my book
        </NuxtLink>
      </div>
      <div
        class="md:col-6 text-center md:text-right order-0 md:order-1 xl:mt-3"
      >
        <img src="/img/main.png" class="main-img" alt="lokman main picture" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main-img {
  max-width: 100%;
  width: 75%;
  @include media-breakpoint-down(xl) {
    width: 80%;
  }
  @include media-breakpoint-down(lg) {
    width: 90%;
  }
  @include media-breakpoint-down(md) {
    width: unset;
  }
}
</style>
