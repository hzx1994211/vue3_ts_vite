/*
 * @Author: huangzhenxiang
 * @Date: 2022-04-29 14:58:35
 * @LastEditors: huangzhenxiang
 * @LastEditTime: 2022-05-03 15:41:11
 */
import router from "@/router"
import { RouteLocationNormalized } from "vue-router"
import { useUserStoreHook } from "@/store/modules/user"
import { usePermissionStoreHook } from "@/store/modules/permission"
import { ElMessage } from "element-plus"
import NProgress from "nprogress"
import "nprogress/nprogress.css"

const userStore = useUserStoreHook()
const permissionStore = usePermissionStoreHook()
NProgress.configure({ showSpinner: false })
//白名单
const whiteList = ['/login', '/auth-redirect', '/bind', '/register']
router.beforeEach(async (to: RouteLocationNormalized, _: RouteLocationNormalized, next: any) => {
  NProgress.start()
  // 判断该用户是否登录
  if (sessionStorage.getItem('token')) {
    if (to.path === "/login") {
      // 如果登录，并准备进入 login 页面，则重定向到主页
      next({ path: "/" })
      NProgress.done()
    } else {
      // 检查用户是否已获得其权限角色
      if (userStore.roles.length === 0) {
        try {
           // 注意：角色必须是一个数组！ 例如: ['admin'] 或 ['developer', 'editor']
           await userStore.getInfo()
          //  console.log(userStore.roles,'----userStore.roles');
           
           const roles = userStore.roles
           // 根据角色生成可访问的 routes（可访问路由 = 常驻路由 + 有访问权限的动态路由）
           permissionStore.setRoutes(roles)
          // 将'有访问权限的动态路由' 添加到 router 中
          permissionStore.dynamicRoutes.forEach((route:any) => {
            router.addRoute(route)
          })
          // 确保添加路由已完成
          // 设置 replace: true, 因此导航将不会留下历史记录
          next({ ...to, replace: true })
        } catch (err: any) {
          // 过程中发生任何错误，都直接重置 token，并重定向到登录页面
          userStore.resetToken()        
          ElMessage.error(err.message || "路由守卫过程发生错误")
          next("/login")
          NProgress.done()
        }
      } else {
        next()
      }
    }
  } else {
    console.log(to.path,'-----to.path');
    
    // 如果没有 token
    if (whiteList.indexOf(to.path) !== -1) {
      // 如果在免登录的白名单中，则直接进入
      next()
    } else {
      // 其他没有访问权限的页面将被重定向到登录页面
      next("/login")
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
