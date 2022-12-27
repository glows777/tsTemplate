/*
 * @Author: glows777 1914426389@qq.com
 * @Date: 2022-12-27 16:24:01
 * @LastEditors: glows777 1914426389@qq.com
 * @LastEditTime: 2022-12-27 16:54:47
 * @FilePath: \vue-admin\src\mock\user.ts
 * @Description: mock例子
 *
 * Copyright (c) 2022 by glows777 1914426389@qq.com, All Rights Reserved.
 */
import type { MockMethod } from 'vite-plugin-mock'

const arr: any = []
for (let index = 0; index < 20; index++) {
  arr.push({
    customer_name: 'wade',
    status_text: '登录成功',
    os: 'Windows 10',
    browser: 'Chrome(99.0.4844.51)',
    ip: '192.168.9.110',
    created: '2021-12-14 10:41:02',
    location: '局域网 局域网',
  })
}

const logList = {
  total: 31,
  page: 1,
  page_size: 20,
  list: arr,
}

const statusList = {
  data: [
    { label: '全部', value: 0 },
    { label: '待审核', value: 1 },
  ],
}

export default [
  {
    url: '/api/getList',
    method: 'post',
    response: () => {
      return logList
    },
  },
  {
    url: '/api/getStatusList',
    method: 'get',
    response: () => {
      return statusList
    },
  },
] as MockMethod[]
