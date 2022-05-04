/*
 * @Author: huangzhenxiang
 * @Date: 2022-04-18 16:44:51
 * @LastEditors: huangzhenxiang
 * @LastEditTime: 2022-05-04 17:41:44
 */
import { createApp } from 'vue'
import App from './App.vue'
import './assets/style/indes.scss'
import router from './router/index'
import './router/permission'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import store from './store'

const app = createApp(App)
app.use(router)
app.use(store)
app.use(ElementPlus, { 
  size: 'small', 
  zIndex: 3000,
  locale:zhCn 
})
app.mount('#app')
