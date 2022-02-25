import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      dirs: ['src/components', 'src/pages', 'src/layouts'],
      dts: true,
    }),
  ],
  alias: {
    '@': path.resolve(__dirname, './src'),
  },
});
