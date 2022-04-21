/*
 * @Author: huangzhenxiang
 * @Date: 2022-04-18 17:01:37
 * @LastEditors: huangzhenxiang
 * @LastEditTime: 2022-04-21 16:45:48
 * @FilePath: \vite_vue3_ts\src\router\router.ts
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import charts from './modules/charts'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Login',
    component: () => import('@/pages/login/Login.vue'), // 注意这里要带上 文件后缀.vue
  },
  charts
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router