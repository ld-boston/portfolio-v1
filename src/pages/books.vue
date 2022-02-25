<template>
  <div class="container py-3 lg:py-4">
    <div class="flex flex-column mx-auto" style="max-width: 1327px">
      <div class="flex book" v-for="book in books" :key="book.title">
        <div
          class="f-alegreya f-bold lg:f-40px xl:f-61px op-60 text-vertical-up hidden lg:block"
        >
          {{ book.title }}
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
            <p
              v-html="book.body"
              class="f-16 md:f-12 lg:f-14 xl:f-18px op-80"
              style="line-height: 21px"
            />
          </div>
        </div>
        <div
          class="f-alegreya f-bold lg:f-40px xl:f-61px op-60 text-vertical-down hidden lg:block"
        >
          {{ book.sub_title_aside }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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

<script lang="ts" setup>
let books = [
  {
    title: 'The Juncture',
    sub_title: 'A thriller story',
    sub_title_aside: 'Chase Your Mistakes',
    link_amazon: 'https://www.test.com/amazon',
    link_excerpt: 'https://www.test.com/except',
    cover: '/img/books/Juncture.jpg',
    body: `
      A hard-working scientist and soon-to-be father, Dr Jevise Scott
      regrettably decides to steal the research papers of his
      supervising professor, Theodore Semyonovich, in order to invent
      time-travel and attain worldwide renown like that of chronicled
      scientists, such as Albert Einstein and Sir Isaac Newton.
      <br /><br />
      The results of his misdeed immediately backfire, as he is chased
      down by a small army of genetically-modified soldiers: a project
      that was thought to be dropped by Professor Semyonovich, but was
      continued in secret without Scott's knowledge.
      <br /><br />
      The results of his misdeed immediately backfire, as he is chased
      down by a small army of genetically-modified soldiers: a project
      that was thought to be dropped by Professor Semyonovich, but was
      continued in secret without Scott's knowledge.
      <br /><br />
      Following this revelation, Scott is ultimately forced to flee his
      home and leave any hope of a bright future. Although, during his
      attempt to escape, he is chased and abducted by his physically
      superior pursuers. Fortunately for him, however, a group of
      mysterious people rescue him, and later reveal themselves as
      time-travellers from 27 years in the future.
      <br /><br />
      Dr Scott, who is pained by his mistakes, has no choice but to
      follow them on a one-chance mission to undo his misdeeds, with the
      hope of preventing a dystopian future. Together, they travel back
      in time to where it all began: Moscow in 1988.
    `,
  },
];
</script>
