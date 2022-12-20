/*
 * @Author: glows777 1914426389@qq.com
 * @Date: 2022-12-16 17:02:49
 * @LastEditors: glows777 1914426389@qq.com
 * @LastEditTime: 2022-12-20 17:21:59
 * @FilePath: \vue-admin\src\utils\api\request\cancel.ts
 * @Description: 处理重复请求
 *
 * Copyright (c) 2022 by glows777 1914426389@qq.com, All Rights Reserved.
 */
import axios from 'axios'

const pendingMap = new Map()

/**
 * @author: glows777
 * @description: 生成唯一的每个请求的唯一key
 * @param {any} config
 * @return {*}
 */
function getPendingKey(config: any) {
  const { url, method, params } = config
  let { data } = config
  if (typeof data === 'string')
    data = JSON.parse(data)
  return [url, method, JSON.stringify(params), JSON.stringify(data)].join('&')
}

/**
 * @author: glows777
 * @description: 储存每个请求的唯一cancel回调, 以此为标识
 * @param {any} config
 * @return {*}
 */
function addPending(config: any) {
  const pendingKey = getPendingKey(config)
  config.cancelToken = config.cancelToken
        || new axios.CancelToken((cancel) => {
          if (!pendingMap.has(pendingKey))
            pendingMap.set(pendingKey, cancel)
        })
}

/**
 * @author: glows777
 * @description: 删除重复的请求
 * @param {any} config
 * @return {*}
 */
function removePending(config: any) {
  const pendingKey = getPendingKey(config)
  if (pendingMap.has(pendingKey)) {
    const cancelToken = pendingMap.get(pendingKey)
    cancelToken(pendingKey)
    pendingMap.delete(pendingKey)
  }
}

export default { addPending, removePending }
