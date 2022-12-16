/*
 * @Author: glows777 1914426389@qq.com
 * @Date: 2022-12-15 15:22:53
 * @LastEditors: glows777 1914426389@qq.com
 * @LastEditTime: 2022-12-16 14:51:51
 * @FilePath: \vue-admin\src\router\index.ts
 * @Description:
 *
 * Copyright (c) 2022 by glows777 1914426389@qq.com, All Rights Reserved.
 */
import { createRouter, createWebHashHistory } from 'vue-router'

/**
 * 实现路由懒加载的工具函数
 * @param {string} url  view的相对路径，相对于src目录
 */
const lazyImport: (url: string) => () => Promise<unknown> = (url) => {
  const modules = import.meta.glob('../views/**/*.vue')

  return modules[`../views/${url}/index.vue`]
}

const routes = [
  {
    path: '/',
    component: lazyImport('home'),
  },
  {
    path: '/example',
    component: lazyImport('example'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
