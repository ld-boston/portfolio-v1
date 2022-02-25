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
