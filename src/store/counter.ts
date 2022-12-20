/*
 * @Author: glows777 1914426389@qq.com
 * @Date: 2022-11-10 13:44:56
 * @LastEditors: glows777 1914426389@qq.com
 * @LastEditTime: 2022-12-16 15:48:30
 * @FilePath: \vue-admin\src\store\counter.ts
 * @Description:
 *
 * Copyright (c) 2022 by glows777 1914426389@qq.com, All Rights Reserved.
 */
import { defineStore } from 'pinia'

// defineStore 调用后返回一个函数，调用该函数获得 Store 实体
export const useCounterStore = defineStore({
  id: 'counter', // id: 必须的，在所有 Store 中唯一
  // state: 返回对象的函数
  state: () => ({
    count: 1,
  }),
  getters: {
    doubleCounter: state => state.count * 2,
    counterPlusOne: state => state.count + 1,
  },
  actions: {
    increment() {
      this.count++
    },
    randomizeCounter() {
      this.count = Math.round(Math.random() * 100)
    },
  },
  // 持久化
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'counter',
        // storage: localStorage,
        storage: sessionStorage,
      },
    ],
  },
})
