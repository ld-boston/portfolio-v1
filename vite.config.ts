import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import svgLoader from 'vite-svg-loader';
const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      dirs: ['src/components', 'src/pages', 'src/layouts'],
      dts: true,
    }),
    svgLoader(),
  ],
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "@/assets/styles/primeflex/_variables.scss";
          @import "@/assets/styles/primeflex/_functions.scss";
          @import "@/assets/styles/primeflex/_mixins.scss";
        `,
      },
    },
  },
  // fix for process.env missing
  define: {
    'process.env': {},
  },
});
