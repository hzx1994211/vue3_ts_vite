/*
 * @Author: huangzhenxiang
 * @Date: 2022-04-18 16:44:51
 * @LastEditors: huangzhenxiang
 * @LastEditTime: 2022-04-18 17:58:26
 * @FilePath: \vite_vue3_ts\vite.config.ts
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
//@ts-ignore
import path from 'path'
//@ts-ignore
import viteCompression from 'vite-plugin-compression'
// https://vitejs.dev/config/
export default defineConfig({
  //@ts-ignore
  root: process.cwd(),
  base: './', //打包路径
  plugins: [
    vue(),
    // gzip压缩 生产环境生成 .gz 文件
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz',
    })
  ],
  // 静态资源服务的文件夹
  publicDir: 'assets',
  resolve: {
    alias: {
      //@ts-ignore
      '@': path.resolve(__dirname, 'src'),
    },
  },
  css:{
    preprocessorOptions:{
      scss:{
        additionalData:'@import "@/assets/style/mian.scss";'
      }
    }
  },
  build:{
    // 压缩
    minify: "esbuild",
    assetsDir: "",
    //@ts-ignore
    outDir: `./dist/${process.env.NODE_ENV}`,
    // 进行压缩计算
    brotliSize: false,
    terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
    }
  },
  //启动服务配置
  server: {
    host: '0.0.0.0',
    port: 8000,
    open: true,
    https: false,
    proxy: {}
  },
})
