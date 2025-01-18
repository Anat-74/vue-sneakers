import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve, dirname } from "node:path";
import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      vue({
         script: {
          propsDestructure: true
       }
      }),
      VueI18nPlugin({
         include: resolve(dirname(fileURLToPath(import.meta.url)), './src/i18n/locale/**'),
         strictMessage: false
       }),
    vueJsx(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
   },
   css: {
      preprocessorOptions: {
          scss: {
              additionalData: `@import "@/assets/styles.scss";`,
          },
      },
  },
})
