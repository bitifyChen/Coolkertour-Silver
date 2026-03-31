import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
   base: '/Coolkertour-Silver/',
  plugins: [
    vue(),
    vueDevTools(),
    Pages({
      dirs: 'src/pages',
    }),
    Layouts({
      layoutsDirs: 'src/layouts',
      defaultLayout: 'default',
    }),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'pinia',
      ],
      resolvers: [ElementPlusResolver()],
      dts: false, // 因為我們使用 Pure JS，不產生 d.ts
    }),
    Components({
      resolvers: [
        ElementPlusResolver(),
        // 這裡未來可以加入 Lucide 圖標的自動引入，但我們先配置基礎
      ],
      dts: false, // 因為我們使用 Pure JS
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
