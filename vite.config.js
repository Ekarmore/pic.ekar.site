import { defineConfig } from 'vite'
import Unocss from 'unocss/vite'
// import presetUno from '@unocss/preset-uno'
// import presetWebFonts from '@unocss/preset-web-fonts'
// import presetAttributify from '@unocss/preset-attributify'
import vue from '@vitejs/plugin-vue'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Unocss(),
  ],
  server: {
    host: '0.0.0.0',
  },
})
