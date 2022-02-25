import { createApp } from 'vue';
import App from '@/App.vue';
import InlineSvg from 'vue-inline-svg';
//
import Router from '@/router';

/* Style */
import '@/assets/styles/main.scss';

/* App */
const app = createApp(App)
  //
  .use(Router);

/* Components */
app.component('inline-svg', InlineSvg);

/* Mount */
Router.isReady().then(() => {
  app.mount('#app');
});
