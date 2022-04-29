/*
 * @Author: huangzhenxiang
 * @Date: 2022-04-18 17:07:53
 * @LastEditors: huangzhenxiang
 * @LastEditTime: 2022-04-29 16:06:58
 * @FilePath: \vite_vue3_ts\src\service\request.ts
 */
import axios, { AxiosRequestConfig } from 'axios'
import NProgress from 'nprogress'
import { ElMessage } from "element-plus"

// 设置请求头和请求路径
axios.defaults.baseURL = import.meta.env.VITE_APP_WEB_URL,
axios.defaults.timeout = 60000
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
axios.interceptors.request.use(
  (config): AxiosRequestConfig<any> => {
    const token = sessionStorage.getItem('token')
    if (token) {
      //@ts-ignore
      config.headers.token = token
    }
    return config
  },
  (error) => {
    return error
  }
)
// 响应拦截
axios.interceptors.response.use(
  (response) => {
    // apiData 是 api 返回的数据
    // const apiData = response.data as any
    const apiData = response
    // 这个 code 是和后端约定的业务 code
    const code = apiData.data.code
    // 如果没有 code, 代表这不是项目后端开发的 api
    if (code === undefined) {
      ElMessage.error("非本系统的接口")
      return Promise.reject(new Error("非本系统的接口"))
    } else {
      switch (code) {
        case 0:
          // code === 0 代表没有错误
          return apiData
        case 20000:
          // code === 20000 代表没有错误
          return apiData
        default:
          // 不是正确的 code
          ElMessage.error(apiData.data.msg || "Error")
          return Promise.reject(new Error("Error"))
      }
    }
  },
  (error) => {
    const apiErrData = error.data as any
    const errCode = apiErrData.code
     // errCode 是 HTTP 状态码
    switch (errCode) {
      case 400:
        error.message = "请求错误"
        break
      case 401:
        error.message = "未授权，请登录"
        break
      case 403:
        // token 过期时，直接退出登录并强制刷新页面（会重定向到登录页）
        sessionStorage.setItem('token','')
        //把pinia的token也清理掉
        //.....
        break
      case 404:
        error.message = "请求地址出错"
        break
      case 408:
        error.message = "请求超时"
        break
      case 500:
        error.message = "服务器内部错误"
        break
      case 501:
        error.message = "服务未实现"
        break
      case 502:
        error.message = "网关错误"
        break
      case 503:
        error.message = "服务不可用"
        break
      case 504:
        error.message = "网关超时"
        break
      case 505:
        error.message = "HTTP版本不受支持"
        break
      default:
        break
    }
    ElMessage.error(error.message)
    return Promise.reject(error)
  }
)

interface ResType<T> {
  code: number
  data?: T
  msg: string
  err?: string
}
interface Http {
  get<T>(url: string, params?: unknown): Promise<ResType<T>>
  post<T>(url: string, params?: unknown): Promise<ResType<T>>
}

const http: Http = {
  get(url, params) {
    return new Promise((resolve, reject) => {
      NProgress.start()
      axios
        .get(url, { params })
        .then((res) => {
          NProgress.done()
          resolve(res.data)
        })
        .catch((err) => {
          NProgress.done()
          reject(err.data)
        })
    })
  },
  post(url, params) {
    return new Promise((resolve, reject) => {
      NProgress.start()
      axios
        .post(url, JSON.stringify(params))
        .then((res) => {
          NProgress.done()
          resolve(res.data)
        })
        .catch((err) => {
          NProgress.done()
          reject(err.data)
        })
    })
  },
}
export default http
