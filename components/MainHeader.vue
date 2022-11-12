<script lang="ts" setup>
import { nextTick, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// sidebar
let sidebarShown = ref(false)
let toggleSidebar = () => (sidebarShown.value = !sidebarShown.value)

// link highlight
const linksHighlightEl = ref<HTMLDivElement>()

router.afterEach(() => {
  sidebarShown.value = false
  setLinksHighlight()
})

onMounted(() => setLinksHighlight())
function setLinksHighlight() {
  nextTick(() => {
    if (!linksHighlightEl.value) return

    let links = document.querySelector('header div.links')
    if (!links) return
    let linksBox = links.getBoundingClientRect()
    let activeLinkBox = document
      .querySelector('header .links a.router-link-exact-active')
      ?.getBoundingClientRect()

    if (!activeLinkBox) return

    let left = activeLinkBox.left - linksBox.left
    let width = activeLinkBox.width

    left = left + 16 + width * 0.5
    width = width - 32 - width * 0.5

    linksHighlightEl.value.style.left = `${left}px`
    linksHighlightEl.value.style.width = `${width}px`
  })
}
</script>

<template>
  <header>
    <div class="container py-3 md:py-2 lg:py-3 xl:py-4 flex align-items-center">
      <NuxtLink
        to="/"
        class="header-logo f-alegreya f-medium f-24px md:f-32px xl:f-42px flex align-items-center"
      >
        <img src="assets/img/boston-logo.svg" />
        <span class="ml-2 lg:ml-3">L.D. Boston</span>
      </NuxtLink>

      <nav class="ml-auto nav-links" :class="{ show: sidebarShown }">
        <div class="mobile-nav head">
          <span class="f-alegreya f-medium f-24px">L.D. Boston</span>
          <button class="ml-auto" @click="toggleSidebar">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
              />
              <path
                fill-rule="evenodd"
                d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
              />
            </svg>
          </button>
        </div>

        <div class="links" style="position: relative">
          <NuxtLink to="/">Home</NuxtLink>
          <NuxtLink to="/about-me">About me</NuxtLink>
          <NuxtLink to="/books">Books</NuxtLink>
          <NuxtLink to="/blog">Blog</NuxtLink>
          <NuxtLink to="/contact">Contact</NuxtLink>
          <div class="link-highlight" ref="linksHighlightEl"></div>
        </div>

        <div class="mobile-nav social">
          <a href="https://www.facebook.com" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
              />
            </svg>
          </a>
          <a href="https://www.twitter.com" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
              />
            </svg>
          </a>
          <a href="https://www.linkedin.com" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
              />
            </svg>
          </a>
        </div>
      </nav>

      <div
        class="mobile-nav backdrop"
        :class="{ show: sidebarShown }"
        @click="toggleSidebar"
      ></div>

      <button class="mobile-nav toggle ml-auto" @click="toggleSidebar">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </button>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  position: sticky;
  z-index: 1000;
  top: 0;
  background-color: rgba(#222, 0.5);
  backdrop-filter: blur(12px);

  .container {
    @include media-breakpoint-down(md) {
      padding-top: 1rem !important;
      padding-bottom: 1rem !important;
    }
  }

  .header-logo > img {
    height: 2.3rem;
    @include media-breakpoint-down(lg) {
      height: 1.8rem;
    }
  }
}
.nav-links {
  position: relative;
  .links > a {
    display: inline-block;
    padding: 0.6rem 1rem;
    color: var(--white);
    font-size: 18px;

    @media screen and (min-width: $xl) {
      font-size: 23px;
    }

    @media screen and (max-width: $md) {
      :deep(&.router-link-exact-active) {
        color: var(--primary);
      }
    }
  }
  .link-highlight {
    position: absolute;
    top: 90%;

    height: 3px;
    border-radius: 4px;
    background-color: var(--primary);
    transition: width 1.1s ease-in-out, left 1.1s ease-in-out;
    @media screen and (max-width: $md) {
      display: none;
    }
  }
}

.mobile-nav {
  display: none;
}
@media screen and (max-width: $md) {
  .nav-links {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 70vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: var(--grey);
    padding: 32px 16px 32px 32px;

    transition: transform 0.3s ease-in-out;
    transform: translateX(-100%);
    &.show {
      transform: translateX(0);
    }
  }

  .nav-links .links {
    display: flex;
    flex-direction: column;
    > a {
      padding: 1.5rem 0;
      font-size: 32px;
    }
  }

  .mobile-nav.head {
    display: flex;
    align-items: center;
    button {
      color: var(--primary);
      background-color: transparent;

      svg {
        font-size: 24px;
      }
    }
  }
  .mobile-nav.social {
    display: flex;
    justify-content: center;

    > a {
      display: block;
      color: #fff;
      font-size: 25px;

      &:not(:last-child) {
        margin-right: 30px;
      }
    }
  }
  .mobile-nav.toggle {
    display: flex;
    color: var(--primary);
    background-color: transparent;

    svg {
      font-size: 30px;
    }
  }

  .mobile-nav.backdrop {
    position: fixed;
    z-index: -1;
    inset: 0;
    height: 100vh;
    background-color: rgba(#000, 0.5);

    display: block;
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;

    &.show {
      visibility: visible;
      opacity: 1;
    }
  }
}
</style>
