/*
 * @Author: huangzhenxiang
 * @Date: 2022-04-18 17:01:37
 * @LastEditors: huangzhenxiang
 * @LastEditTime: 2022-05-03 15:28:53
 * @FilePath: \vite_vue3_ts\src\router\router.ts
 */
import { createRouter, createWebHistory, RouteRecordRaw,createWebHashHistory  } from 'vue-router'
const Layout = () => import("@/layout/index.vue")
import charts from './modules/charts'
//静态路由
export const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/pages/login/Login.vue'), // 注意这里要带上 文件后缀.vue
  },
  {
    path: '/',
    name: 'main',
    component: Layout,
    redirect: { name: 'home' },
    children:[
      {
        name: 'home',
        path: 'home',
        component: () => import('@/pages/home/index.vue'),
        meta: { 
          title: "首页",
          roles: ["admin", "editor"],
        },
      }
    ]
  },
  
]

/**
 * 动态路由
 * 用来放置有权限（roles 属性）的路由
 * 必须带有 name 属性
 */
 export const asyncRoutes: Array<RouteRecordRaw> = [
  {
    path: "/permission",
    component: Layout,
    redirect: "/permission/page",
    name: "Permission",
    meta: {
      title: "权限管理",
      icon: "lock",
      roles: ["admin", "editor"], // 可以在根路由中设置角色
      // alwaysShow: true // 将始终显示根菜单
    },
    children: [
      {
        path: "page",
        component: () => import("@/pages/permission/page.vue"),
        name: "PagePermission",
        meta: {
          title: "页面权限",
          roles: ["admin", "editor"] // 或者在子导航中设置角色
        }
      },
      {
        path: "directive",
        component: () => import("@/pages/permission/directive.vue"),
        name: "DirectivePermission",
        meta: {
          title: "指令权限", // 如果未设置角色，则表示：该页面不需要权限，但会继承根路由的角色
          roles: ["admin", "editor"] // 或者在子导航中设置角色
        }
      }
    ]
  },
  charts,
  {
    path: "/:pathMatch(.*)*",
    redirect:{name:'page404'},
  },
  {
    path: '/404',
    name: 'page404',
    component: () => import('@/pages/404/index.vue'), 
  },
  // {
  //   path: "/:pathMatch(.*)*", // 必须将 'ErrorPage' 路由放在最后, Must put the 'ErrorPage' route at the end
  //   component: Layout,
  //   redirect: "/404",
  //   name: "ErrorPage",
  //   meta: {
  //     title: "错误页面",
  //     icon: "404",
  //     hidden: true
  //   },
  //   children: [
  //     {
  //       path: "401",
  //       component: () => import("@/pages/error-page/401.vue"),
  //       name: "401",
  //       meta: {
  //         title: "401"
  //       }
  //     },
  //     {
  //       path: "404",
  //       component: () => import("@/pages/error-page/404.vue"),
  //       name: "404",
  //       meta: {
  //         title: "404"
  //       }
  //     }
  //   ]
  // }
]

const router = createRouter({
  // createWebHashHistory  createWebHistory
  history: createWebHistory(),
  routes:constantRoutes,
})



/** 重置路由 */
export function resetRouter() {
  // 注意：所有动态路由路由必须带有 name 属性，否则可能会不能完全重置干净
  try {
    router.getRoutes().forEach((route) => {
      const { name, meta } = route
      if (name && meta.roles?.length) {
        router.hasRoute(name) && router.removeRoute(name)
      }
    })
  } catch (error) {
    // 强制刷新浏览器，不过体验不是很好
    window.location.reload()
  }
}
export default router