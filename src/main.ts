/*
 * @Author: huangzhenxiang
 * @Date: 2022-04-18 16:44:51
 * @LastEditors: huangzhenxiang
 * @LastEditTime: 2022-04-29 11:40:25
 */
import { createApp } from 'vue'
import App from './App.vue'
import './assets/style/indes.scss'
import router from './router/index'
import ElementPlus from 'element-plus'
import store from './store'

const app = createApp(App)
app.use(router)
app.use(store)
app.use(ElementPlus, { size: 'small', zIndex: 3000 })
app.mount('#app')
