<script lang="ts" setup>
const route = useRoute()

const {
  data: post,
  pending,
  error,
} = useFetch('/api/post', {
  key: `blog-${route.params.slug}`,
  lazy: true,
  query: {
    slug: route.params.slug,
  },
})
</script>

<template>
  <div class="container my-5">
    <div v-if="pending" class="text-center mt-6">
      <Spinner size="80" thickness="4" />
    </div>
    <div v-else-if="error">
      Error loading blog post <br />
      Please try again later <br />
      {{ error }}
    </div>
    <div v-else class="post">
      <MetaTitle :content="post.title" />
      <MetaDescription :content="post.metadata.description" />
      <MetaImage
        :content="post.metadata?.image?.imgix_url || '/img/base-social.jpg'"
      />

      <h1 class="f-24px sm:f-30px md:f-35px md:f-45px xl:f-60px text-center">
        {{ post.title }}
      </h1>

      <div class="img-wrapper text-center">
        <div class="img-container">
          <img :src="post.metadata?.image?.imgix_url" alt="" />
        </div>
      </div>

      <div class="post-content" v-html="post.content"></div>

      <!--  -->
      <!-- <hr
        class="mx-auto my-4"
        style="max-width: 820px; background-color: grey"
      />
      <div class="comments">
        <h2 class="mt-0">Comments</h2>
        <div class="disqus-container">
          <Disqus />
        </div>
      </div> -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.post {
  > h1 {
    @include mx-auto;
    max-width: 1160px;
  }
  .img-wrapper {
    @include mx-auto;
    max-width: 935px;
  }
  .post-content {
    @include mx-auto;
    max-width: 820px;
    padding: 42px 36px;
    @include media-breakpoint-down(xl) {
      padding: 1rem;
    }
    border-radius: 10px;
    background-color: var(--grey);

    position: relative;
    margin-top: -64px;
    @include media-breakpoint-down(xl) {
      margin-top: 1rem;
    }

    ::v-deep() {
      img {
        max-width: 100%;
      }
      p {
        font-size: 18px;
        line-height: 1.5em;

        margin: 0 0 1.5rem;
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
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
      border-radius: 10px;
    }
  }

  .comments {
    @include mx-auto;
    max-width: 820px;
    padding: 42px 36px;
    @include media-breakpoint-down(xl) {
      padding: 1rem;
    }
    border-radius: 10px;
    background-color: var(--grey);
  }
}

.disqus-container {
  position: relative;
  overflow: hidden;

  > div {
    margin-bottom: -40px;
  }
}
</style>
