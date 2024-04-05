import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import webExtension from '@samrum/vite-plugin-web-extension'
import fflateZip from 'vite-plugin-fflate-zip'
import { getManifest } from './src/manifest'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [
      vue(),
      UnoCSS(),
      webExtension({
        manifest: getManifest(),
      }),
      fflateZip({
        inDir: 'dist/build',
      }),
    ],
    resolve: {
      alias: {
        $: resolve(__dirname, './src'),
      },
    },
    build: {
      outDir: mode === 'production' ? './dist/build' : './dist/dev',
    },
    server: {
      port: 7483,
    },
  }
})
