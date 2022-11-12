<script lang="ts" setup>
definePageMeta({ transitionIndex: 5 })
</script>

<template>
  <div class="container py-3">
    <MetaTitle content="L.D. Boston - Contact" />

    <div class="row">
      <div class="col-12 md:mb-3 xl:mb-5">
        <h1 class="f-alegreya f-bold op-80 m-0">Let's get in touch</h1>
      </div>
      <div class="col-12 md:col-6">
        <form id="contact-form">
          <div class="input-container">
            <input
              name="name"
              type="text"
              class="input"
              placeholder=" "
              required
            />
            <label class="input-label">Name</label>
          </div>

          <div class="input-container">
            <input
              name="email"
              type="text"
              class="input"
              placeholder=" "
              required
            />
            <label class="input-label">Email</label>
          </div>

          <div class="input-container">
            <textarea
              name="message"
              type="text"
              class="input"
              placeholder=" "
              required
            ></textarea>
            <label class="input-label">Message</label>
          </div>

          <p
            class="f-alegreya f-14px md:f-15px lg:f-16px xl:f-22px my-1 lg:my-2 op-30 text-center md:text-left"
          >
            Set your mind at rest, we will not spam your inbox
          </p>

          <div class="text-center mt-4">
            <button class="btn btn-primary py-3 px-7">Send</button>
          </div>
        </form>
      </div>
      <div
        class="col-12 md:col-6 info mt-6 xl:mt-7 p-0 md:pl-4 xl:pl-0 text-center md:text-left"
      >
        <h2 class="f-25px lg:f-35px xl:f-54px op-80">Additional Information</h2>
        <div class="mt-5">
          <div class="f-28 lg:f-30px xl:f-39px op-60">Email</div>
          <a
            class="f-27px lg:f-28px xl:f-35px md:mt-2 xl:mt-3"
            href="mailto:ldwrites@something.com"
          >
            Ldwrites@something.com
          </a>
        </div>
        <div>
          <div class="f-28 lg:f-30px xl:f-39px op-60">Phone</div>
          <a
            class="f-27px lg:f-28px xl:f-28px md:mt-2 xl:mt-3"
            href="tel:+213248209360"
          >
            +213 24 820 93 60
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
h1 {
  font-size: 170px;
  line-height: 0.8;

  @include media-breakpoint-down(xl) {
    font-size: 97px;
    line-height: 0.6;
    letter-spacing: 9px;
  }
  @include media-breakpoint-down(lg) {
    font-size: 77px;
    line-height: 0.5;
    letter-spacing: 3px;
  }
  @include media-breakpoint-down(md) {
    font-size: 45px;
    line-height: 1;
    letter-spacing: 0;
  }
}
.info {
  > h2 {
    margin: 0;
  }
  > div {
    margin: 25px 0 0;
  }
  a {
    display: inline-block;
    color: var(--light);

    transition: color 0.3s ease-in-out;
    &:hover {
      color: var(--primary);
    }
  }
}

#contact-form {
  max-width: 612px;

  .input-container {
    font-family: 'AlegreyaSans', Arial, sans-serif;

    font-size: 16px;
    @include media-breakpoint-up(md) {
      font-size: 15px;
    }
    @include media-breakpoint-up(lg) {
      font-size: 16px;
    }
    @include media-breakpoint-up(xl) {
      font-size: 20px;
    }

    label {
      opacity: 0.3;
    }
  }
}

textarea {
  min-height: 100px;
  height: 160px;
  @include media-breakpoint-down(xl) {
    height: 130px;
  }
  @include media-breakpoint-down(lg) {
    height: 100px;
  }
  @include media-breakpoint-down(md) {
    height: 90px;
  }
}
</style>
