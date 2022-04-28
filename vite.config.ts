/*
 * @Author: huangzhenxiang
 * @Date: 2022-04-18 16:44:51
 * @LastEditors: huangzhenxiang
 * @LastEditTime: 2022-04-28 10:33:30
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
//@ts-ignore
import path from 'path'
//@ts-ignore
import viteCompression from 'vite-plugin-compression'
// https://vitejs.dev/config/
export default defineConfig({
  // root: process.cwd(),
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
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
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
        additionalData:'@import "@/assets/style/main.scss";'
      }
    }
  },
  build:{
     /** 消除打包大小超过 500kb 警告 */
     chunkSizeWarningLimit: 2000,
     /** vite 2.6.x 以上需要配置 minify: terser，terserOptions 才能生效 */
     minify: "terser",
     /** 在 build 代码时移除 console.log、debugger 和 注释 */
     terserOptions: {
       compress: {
         drop_console: false,
         drop_debugger: true,
         pure_funcs: ["console.log"]
       },
       output: {
         /** 删除注释 */
         comments: false
       }
     },
    // 进行压缩计算
    brotliSize: false,
    assetsDir: "static/assets", //指定生成的静态目录
      /** 静态资源打包到 dist 下的不同目录 */
      rollupOptions: {
        output: {
          chunkFileNames: "static/js/[name]-[hash].js",
          entryFileNames: "static/js/[name]-[hash].js",
          assetFileNames: "static/[ext]/[name]-[hash].[ext]"
        }
      }
  },
  //启动服务配置
  server: {
    /** host 设置为 true 才可以使用 network 的形式，以 ip 访问项目 */
    host: true, // host: "0.0.0.0"
    port: 8000,
    open: true,
    https: false,
    proxy: {}
  },
})
