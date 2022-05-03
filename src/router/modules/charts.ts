/*
 * @Author: huangzhenxiang
 * @Date: 2022-04-21 16:15:32
 * @LastEditors: huangzhenxiang
 * @LastEditTime: 2022-05-03 11:45:34
 */
import Layout from '@/layout/index.vue'
 const charts = {
  path: '/charts',
  component: Layout,
  redirect: '/charts/keyboard',
  name: 'Charts',
  meta: {
    title: 'charts',
    icon: 'chart',
    roles: ["admin", "editor"], // 可以在根路由中设置角色
  },
  children: [
    {
      path: 'keyboard',
      component: () => import('@/pages/charts/keyboard.vue'),
      name: 'KeyboardChart',
      meta: { 
        title: 'keyboardChart', 
        noCache: true,
        roles: ["admin", "editor"]
      } // 可以在根路由中设置角色 
    },
    {
      path: 'keyDom',
      component: () => import('@/pages/charts/keyDom.vue'),
      name: 'keyDom',
      meta: { 
        title: 'keyDom', 
        noCache: true,
        roles: ["admin", "editor"]
      } // 可以在根路由中设置角色 
    },
  ]
}

export default charts