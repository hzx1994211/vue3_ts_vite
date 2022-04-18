/*
 * @Author: huangzhenxiang
 * @Date: 2022-04-18 17:01:37
 * @LastEditors: huangzhenxiang
 * @LastEditTime: 2022-04-18 17:03:06
 * @FilePath: \vite_vue3_ts\src\router\router.ts
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Login',
    component: () => import('@/pages/login/Login.vue'), // 注意这里要带上 文件后缀.vue
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router