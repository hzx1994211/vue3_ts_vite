/*
 * @Author: huangzhenxiang
 * @Date: 2022-04-21 16:15:32
 * @LastEditors: huangzhenxiang
 * @LastEditTime: 2022-08-08 17:55:23
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
      }, // 可以在根路由中设置角色 
      // redirect: '/billManage/receivableBill/list',
      // children: [
      //   {
      //     path: 'list',
      //     name: 'incomeConfirmList',
      //     meta: {
      //       title: '应收账单',
      //       keepAlive: true,
      //       breadcrumbShow: true, // 不显示跟路由面包屑
      //       roles: ['incomeConfirmList'] // 可以在根路由中设置角色
      //     },
      //     component: () => import('@/views/BillManage/receivableBill/index.vue')
      //   },
      //   {
      //     path: 'details',
      //     name: 'incomeConfirmDetails',
      //     meta: {
      //       title: '运单详情',
      //       tagShow: true, // 新增/编辑/详情路由不展示在tagView
      //       roles: ['quotation'], // 可以在根路由中设置角色
      //       pagingShow: true // 详情展示分页
      //     },
      //     component: () => import('@/views/BillManage/incomeConfirm/details/index.vue')
      //   }
      // ]
    },
  ]
}

export default charts