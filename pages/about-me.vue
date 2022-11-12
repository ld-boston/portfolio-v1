<script lang="ts" setup>
definePageMeta({ transitionIndex: 2 })
</script>

<template>
  <div class="container">
    <MetaTitle content="L.D. Boston - About Me" />

    <div class="row g-3 py-3 md:pt-3 lg:pt-4 relative">
      <div class="col-12 md:col-6 align-self-center pt-4 md:pt-0">
        <div class="avatar-img box">
          <img src="/img/avatar.jpg" class="box-content px-3 xl:px-5" alt="" />
        </div>
      </div>
      <div class="col-12 block md:hidden">
        <h2 class="middle-text f-alegreya f-bold op-60 my-4 f-44px text-center">
          WHO AM I?
        </h2>
      </div>
      <div class="col-12 md:col-6 f-16px md:f-12px lg:f-14px xl:f-20px text">
        <p>Hi. My name is Lokmane, but I go by the name L. D. Boston.</p>
        <p>
          Since you’re here, you could probably tell I’m an author who writes
          sci-fi thrillers. Let me tell you how I started.
        </p>
        <p>
          It began when I was young, when I was fascinated by the concept of
          turning my ideas and imagination into something palpable, like a
          story. I’ve always considered myself a creative person, which is why I
          chose to work in the field of design while investing in my passion for
          storytelling.
        </p>
        <p>
          The first motivation that started my storytelling journey came from
          reading Agatha Christie’s detective book “The Pale Horse”, as I was
          captivated by her narrative style and attention to detail. This helped
          push me into reading more books.
        </p>
        <p>
          My last arrival was “The Alchemist” by Paulo Coelho, a masterpiece
          that taught me a lot about how to develop a character’s journey. So
          with such information and inspiration, I began working on my year-long
          project “The Juncture”.
        </p>
        <p>
          Once I’d taken the chance to write my first book and experienced what
          it was like, I’ve decided that I would make more and share them with
          the world, as well as embark on a mission to help anybody who wishes
          to make their own.
        </p>
        <p>
          Feel free to get in touch with me if you’d like to know anything about
          my work, or if you want to discuss storytelling and the subject of
          writing books.
        </p>
      </div>
      <div class="who f-alegreya f-bold op-60 text-vertical-down">
        WHO AM I?
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.who {
  position: absolute;
  top: 50%;
  left: 50%;
  overflow: hidden;
  transform: translate(-50%, -50%);
  white-space: nowrap;

  clip-path: inset(0 0 100% 0);
  animation: grow 0.5s 0.8s ease-in-out forwards;
  @keyframes grow {
    to {
      clip-path: inset(0 0 0 0);
    }
  }

  font-size: 85px;
  @include media-breakpoint-down(xl) {
    font-size: 60px;
  }
  @include media-breakpoint-down(lg) {
    font-size: 50px;
  }

  display: none;
  @include media-breakpoint-up(md) {
    display: block;
  }
}

.avatar-img {
  img {
    object-fit: cover;
  }
}

.text {
  > p {
    margin: 0;

    &:not(:last-child) {
      margin-bottom: 31px;
      @include media-breakpoint-down(xl) {
        margin-bottom: 13px;
      }
      @include media-breakpoint-down(lg) {
        margin-bottom: 8px;
      }
      @include media-breakpoint-down(sm) {
        margin-bottom: 12px;
      }
    }

    line-height: 31px;
    @include media-breakpoint-down(xl) {
      line-height: 22px;
    }
    @include media-breakpoint-down(md) {
      line-height: 21px;
    }
  }
}

.middle-text {
  position: relative;
  &::before {
    content: '';
    position: absolute;
    width: 200vw;
    height: 200vh;
    left: -100%;
    bottom: 50%;
    background-color: var(--grey);
    z-index: -1;
    pointer-events: none;
  }
}
</style>
