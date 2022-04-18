/*
 * @Author: huangzhenxiang
 * @Date: 2022-04-18 16:44:51
 * @LastEditors: huangzhenxiang
 * @LastEditTime: 2022-04-18 17:43:40
 * @FilePath: \vite_vue3_ts\src\main.ts
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from "pinia"

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.mount('#app')
