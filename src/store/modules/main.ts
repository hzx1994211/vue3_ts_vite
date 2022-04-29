/*
 * @Author: huangzhenxiang
 * @Date: 2022-04-18 17:44:09
 * @LastEditors: huangzhenxiang
 * @LastEditTime: 2022-04-18 17:48:51
 * @FilePath: \vite_vue3_ts\src\store\main.ts
 */
import { defineStore } from 'pinia'

export const useMainStore = defineStore({
  id: 'mian',
  state: () =>({
    name: '超级管理员'
  }),
  getters: {
    nameLength: (state) => state.name.length,
  },
  actions:{
    async insertPost(data:string) {
      // 可以做异步
      // await doAjaxRequest(data);
      this.name = data;
    }
  }
})
