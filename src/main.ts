import { createApp } from 'vue';
import App from '@/App.vue';
import InlineSvg from 'vue-inline-svg';
import VueDisqus from 'vue-disqus';
//
import Router from '@/router';
import { Head } from '@/services/settings';

/* Style */
import '@/assets/styles/main.scss';

/* App */
const app = createApp(App)
  //
  .use(Router)
  .use(Head)
  .use(VueDisqus, { shortname: 'ld-boston' });

/* Components */
app.component('inline-svg', InlineSvg);

/* Mount */
Router.isReady().then(() => {
  app.mount('#app');
});
