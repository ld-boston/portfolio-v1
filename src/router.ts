import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
//
import BaseLayout from '@/layouts/base.vue';
import index from '@/pages/index.vue';

const routes: Array<RouteRecordRaw> = [
  //
  {
    path: '',
    component: BaseLayout,
    meta: { layout: 'base' },
    children: [
      {
        path: '',
        name: 'index',
        component: index,
      },
      {
        path: '/about-me/',
        name: 'about-me',
        component: () => import('@/pages/about-me.vue'),
      },
      {
        path: '/books/',
        name: 'books',
        component: () => import('@/pages/books.vue'),
      },
      {
        path: '/blog/',
        name: 'blog',
        component: () => import('@/pages/blog.vue'),
      },
      {
        path: '/contact/',
        name: 'contact',
        component: () => import('@/pages/contact.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;

// transition middleware
const pageIndexs = {
  index: 1,
  'about-me': 2,
  books: 3,
  blog: 4,
  contact: 5,
};
router.beforeEach((to, from, next) => {
  if (!from.name || !to.name) {
    to.meta.transitionName = 'fade';
    return next();
  }

  let toName = to.name.toString() as keyof typeof pageIndexs;
  let fromName = from.name.toString() as keyof typeof pageIndexs;
  if (!(toName in pageIndexs) || !(fromName in pageIndexs)) {
    to.meta.transitionName = 'fade';
    return next();
  }

  if (pageIndexs[fromName] < pageIndexs[toName]) {
    to.meta.transitionName = 'slide-left';
  } else {
    to.meta.transitionName = 'slide-right';
  }

  next();
});

// body class middleware
router.beforeEach((to, from, next) => {
  if (!document) {
    return next();
  }

  if (from.name) {
    document.body.classList.remove(
      `page-${from.name.toString().toLowerCase()}`,
    );
  }
  if (to.name) {
    document.body.classList.add(`page-${to.name.toString().toLowerCase()}`);
  }

  next();
});
