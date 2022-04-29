/*
 * @Author: huangzhenxiang
 * @Date: 2022-04-18 17:28:47
 * @LastEditors: huangzhenxiang
 * @LastEditTime: 2022-04-29 15:11:41
 * @FilePath: \vite_vue3_ts\src\api\login_types.ts
 */
export interface ILoginParams {
  userName: string
  passWord: string | number
}
export interface ILoginApi {
  login: (params: ILoginParams)=> Promise<any>
}

export interface UserInfoApi {
  userInfo: ()=> Promise<any>
}