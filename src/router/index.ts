/*
 * @Author: huangzhenxiang
 * @Date: 2022-04-18 17:01:37
 * @LastEditors: huangzhenxiang
 * @LastEditTime: 2022-04-22 15:56:13
 * @FilePath: \vite_vue3_ts\src\router\router.ts
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'
import charts from './modules/charts'
const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/pages/login/Login.vue'), // 注意这里要带上 文件后缀.vue
  },
  {
    path: '/:catchAll(.*)',
    redirect:{name:'page404'},
  },
  {
    path: '/404',
    name: 'page404',
    component: () => import('@/pages/404/index.vue'), 
  },
  {
    path: '/',
    name: 'main',
    component: Layout,
    redirect: { name: 'home' },
    meta: { title: "首页" },
    children:[
      {
        name: 'home',
        path: '/home',
        component: () => import('@/pages/home/index.vue'),
      }
    ]
  },
  charts
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router