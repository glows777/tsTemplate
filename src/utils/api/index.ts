/*
 * @Author: glows777 1914426389@qq.com
 * @Date: 2022-12-16 15:59:36
 * @LastEditors: glows777 1914426389@qq.com
 * @LastEditTime: 2022-12-16 22:13:05
 * @FilePath: \vue-admin\src\utils\api\index.ts
 * @Description:
 *
 * Copyright (c) 2022 by glows777 1914426389@qq.com, All Rights Reserved.
 */
import request from './request'

export function getListAPI() {
  return request(
    {
      url: '/api/list',
      method: 'get',
    },
    {
      loading: true,
    },
    {
      text: '加载中...',
    },
  )
}
