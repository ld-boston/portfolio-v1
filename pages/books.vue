<script lang="ts" setup>
let books = [
  {
    title: 'The Juncture',
    sub_title: 'A thriller story',
    motto_left: 'When blood dries',
    motto_right: "All that's left is regret",
    link_amazon: '',
    link_excerpt: 'https://www.test.com/except',
    cover: '/img/books/Juncture.jpg',
    body: `
      <p>
        <em>
          The universe won't wait for you to fix it. In fact, you've
          already fallen behind.
        </em>
      </p>
      <p>
        Bound, beaten, and defeated, ex-soldier and PhD researcher Dr
        Scott suffers the consequences of plagiarising his fellow
        professor's papers on time-travel theory, three years after the
        fact. His captors: a militia of genetically-modified soldiers.
        Their goal: to gain access to the technology he had developed
        using the stolen research.
      </p>
      <p>
        With no hope of escape, the situation is looking grim for Scott
        when the facility he's being held in comes under siege by a group
        masked individuals. Dr Scott broken free, they reveal themselves
        to be soldiers from a dystopian America... Thirty years in the
        future.
      </p>
      <p>
        <strong>
          “In nature there are neither rewards nor punishments; there are
          consequences.”
        </strong>
        — Robert Green Ingersoll
      </p>
      <p>
        Desperate and guilt-ridden, Dr Scott is brought onto a last-chance
        mission to prevent the dystopian future to which his actions
        served as a catalyst. With his knowledge, the fate of the world is
        thrown into his hands, and the only way to save the future is
        through the past.
      </p>
    `,
  },
]
</script>

<template>
  <div class="container py-3 lg:py-4">
    <div class="flex flex-column mx-auto" style="max-width: 1327px">
      <div class="flex book" v-for="book in books" :key="book.title">
        <div
          class="f-alegreya f-bold lg:f-40px xl:f-61px op-60 text-vertical-up hidden lg:block"
        >
          {{ book.motto_left }}
        </div>
        <div class="flex flex-column md:flex-row book-card md:mx-2">
          <img :src="book.cover" alt="" />
          <div
            class="md:p-4 xl:px-6 xl:py-5 mt-4 md:mt-0 text-center md:text-left"
          >
            <h2 class="f-alegreya f-bold md:f-32px xl:f-49px m-0 md:mb-3">
              {{ book.title }}
            </h2>
            <div class="f-alegreya-sans md:f-20px xl:f-24px op-80 mt-3 md:mt-0">
              {{ book.sub_title }}
            </div>
            <div
              class="flex justify-content-center md:justify-content-start mt-3"
            >
              <a
                v-if="book.link_amazon"
                :href="book.link_amazon"
                class="btn btn-primary f-12 xl:f-14px p-3 mr-4"
                target="_blank"
              >
                Buy on Amazon
              </a>
              <a
                v-if="book.link_excerpt"
                :href="book.link_excerpt"
                class="btn btn-primary f-12 xl:f-14px p-3"
                target="_blank"
              >
                Get Excerpt
              </a>
            </div>
            <hr class="mt-3 xl:mt-5 mb-1 w-10 mx-auto" />
            <div
              v-html="book.body"
              class="content f-16 md:f-12 lg:f-14 xl:f-18px op-80"
            ></div>
          </div>
        </div>
        <div
          class="f-alegreya f-bold lg:f-40px xl:f-61px op-60 text-vertical-down hidden lg:block"
        >
          {{ book.motto_right }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content {
  line-height: 21px;
  text-align: start;
  @include media-breakpoint-down(md) {
    text-align: justify;
  }
}
.book:not(:last-child) {
  margin-bottom: 40px;
  position: relative;

  @media screen and (max-width: $md) {
    &::after {
      content: '';
      position: absolute;
      left: -20vw;
      bottom: -10px;
      width: 200vw;
      height: 1px;
      background-color: var(--light);
      opacity: 0.3;
    }
  }
}
.book-card {
  background-color: var(--grey);
  > img {
    display: block;
    width: 47%;
    height: 100%;
    object-fit: cover;
  }
  > div {
    width: 53%;
  }

  @media screen and (max-width: $md) {
    background-color: unset;

    > img {
      width: 69%;
      margin: 0 auto;
      background-color: var(--grey);
      padding: 8px;
    }
    > div {
      width: unset;
    }
  }
}
</style>
