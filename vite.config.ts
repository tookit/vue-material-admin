import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vuetify from 'vite-plugin-vuetify';
import mockDevServerPlugin from 'vite-plugin-mock-dev-server';
// @ts-expect-error Known error: https://github.com/sxzz/unplugin-vue-macros/issues/257#issuecomment-1410752890
import DefineOptions from 'unplugin-vue-define-options/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vuetify({
      autoImport: true
      //styles: "expose",
    }),
    DefineOptions(),
    mockDevServerPlugin({
      include: 'mock/**/*.mock.{ts,js,cjs,mjs,json,json5}'
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {}
    }
  },
  server: {
    host: true,
    port: 9527,
    proxy: {
      '/api': {
        target: '',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/api/v1')
      }
    }
  },
  optimizeDeps: {
    exclude: ['vuetify'],
    entries: ['./src/**/*.vue']
  }
});
