import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
//
import BaseLayout from '@/layouts/base.vue';
import index from '@/pages/index.vue';
import aboutMe from '@/pages/about-me.vue';
import books from '@/pages/books.vue';
import blog from '@/pages/blog.vue';
import contact from '@/pages/contact.vue';
import blogPost from '@/pages/blog-post.vue';

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
        component: aboutMe,
        //
        meta: {
          title: 'L.D. Boston | About me',
          description: 'About L.D. Boston',
        },
      },
      {
        path: '/books/',
        name: 'books',
        component: books,
        //
        meta: {
          title: 'L.D. Boston | Books',
          description: 'Books created by L.D. Boston',
        },
      },
      {
        path: '/blog/',
        name: 'blog',
        component: blog,
        //
        meta: {
          title: 'L.D. Boston | Blog',
          description: "L.D. Boston's Blog",
        },
      },
      {
        path: '/contact/',
        name: 'contact',
        component: contact,
        //
        meta: {
          title: 'L.D. Boston | Contact',
          description: 'Contact L.D. Boston',
        },
      },
      //
      {
        path: '/:slug/',
        name: 'blog-post',
        component: blogPost,
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
