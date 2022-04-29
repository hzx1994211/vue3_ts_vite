/*
 * @Author: huangzhenxiang
 * @Date: 2022-04-18 17:23:38
 * @LastEditors: huangzhenxiang
 * @LastEditTime: 2022-04-29 15:11:56
 * @FilePath: \vite_vue3_ts\src\api\login\login.ts
 */
//@ts-ignore
import http from '@/service/request'
import * as T from './types'

// const accountLogin: T.ILoginApi = {
//     login(params){
//         return http.post('/login', params)
//     }

// }
// const userInfoRequest = {
//   userInfo(){
//       return http.post('/login')
//   }
// }
const accountLogin: T.ILoginApi = {
    login(params){
        return http.post('/login', params)
    }

}
const userInfoRequest:T.UserInfoApi = {
  userInfo(){
      return http.post('/login')
  }
}
export {
  accountLogin,
  userInfoRequest
}
