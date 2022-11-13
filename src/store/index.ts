/*
 * @Author: glows777 1914426389@qq.com
 * @Date: 2022-11-10 13:44:56
 * @LastEditors: glows777 1914426389@qq.com
 * @LastEditTime: 2022-11-11 13:58:10
 * @FilePath: \vue-admin\src\store\index.ts
 * @Description:
 *
 * Copyright (c) 2022 by glows777 1914426389@qq.com, All Rights Reserved.
 */
import { createPinia, defineStore } from 'pinia'

import piniaPersist from 'pinia-plugin-persist'

interface GlobalState {
  token: string
  userInfo: any
}
// defineStore 调用后返回一个函数，调用该函数获得 Store 实体
export const GlobalStore = defineStore({
  id: 'GlobalState', // id: 必须的，在所有 Store 中唯一
  // state: 返回对象的函数
  state: (): GlobalState => ({
    token: '',
    userInfo: {},
  }),
  getters: {},
  actions: {
    // 不使用箭头函数
    setToken(token: string) {
      this.token = token
    },
    setUserIngo(userInfo: any) {
      this.userInfo = userInfo
    },
  },
  // 持久化
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'GlobalState',
        storage: localStorage,
        // storage: sessionStorage,
      },
    ],
  },
})
const pinia = createPinia()
pinia.use(piniaPersist)

export default pinia

