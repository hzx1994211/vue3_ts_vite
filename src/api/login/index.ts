/*
 * @Author: huangzhenxiang
 * @Date: 2022-04-18 17:23:38
 * @LastEditors: huangzhenxiang
 * @LastEditTime: 2022-05-03 15:07:25
 */
//@ts-ignore
import http from '@/service/request'
//用户登陆
const accountLogin = (params:any) => http.post('users/login', params)
//获取用户详情
const userInfoRequest = () => http.post('users/info')
export {
  accountLogin,
  userInfoRequest
}
