<template>
  <router-view />
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const pageIndexs = {
  index: 1,
  'about-me': 2,
  books: 3,
  blog: 4,
  contact: 5,
};
router.beforeEach((to, from, next) => {
  if (!from.name || !to.name) return;

  let toName = to.name.toString() as keyof typeof pageIndexs;
  let fromName = from.name.toString() as keyof typeof pageIndexs;
  if (!(toName in pageIndexs) || !(fromName in pageIndexs)) return;

  if (pageIndexs[fromName] < pageIndexs[toName]) {
    to.meta.animationDir = 'slide-left';
  } else {
    to.meta.animationDir = 'slide-right';
  }

  next();
});
</script>
