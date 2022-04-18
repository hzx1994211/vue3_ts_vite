/*
 * @Author: huangzhenxiang
 * @Date: 2022-04-18 17:23:38
 * @LastEditors: huangzhenxiang
 * @LastEditTime: 2022-04-18 17:38:36
 * @FilePath: \vite_vue3_ts\src\api\login\login.ts
 */
//@ts-ignore
import http from '@/service/request'
import * as T from './types'

const loginApi: T.ILoginApi = {
    login(params){
        return http.post('/login', params)
    }

}
export {
  loginApi
}
