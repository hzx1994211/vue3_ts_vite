/*
 * @Author: huangzhenxiang
 * @Date: 2022-04-18 17:23:38
 * @LastEditors: huangzhenxiang
 * @LastEditTime: 2022-04-29 15:51:03
 */
//@ts-ignore
import http from '@/service/request'
// import * as T from './types'
// const accountLogin: T.ILoginApi = {
//     login(params){
//         return http.post('/login', params)
//     }

// }
// const userInfoRequest:T.UserInfoApi = {
//   userInfo(){
//       return http.post('/login')
//   }
// }
//用户登陆
const accountLogin = (params:any) => http.post('users/login', params)
//获取用户详情
const userInfoRequest = () => http.post('users/info')
export {
  accountLogin,
  userInfoRequest
}
