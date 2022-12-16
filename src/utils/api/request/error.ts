/*
 * @Author: glows777 1914426389@qq.com
 * @Date: 2022-12-16 17:00:44
 * @LastEditors: glows777 1914426389@qq.com
 * @LastEditTime: 2022-12-16 22:53:46
 * @FilePath: \vue-admin\src\utils\api\request\error.ts
 * @Description: 处理请求错误
 *
 * Copyright (c) 2022 by glows777 1914426389@qq.com, All Rights Reserved.
 */

import axios from 'axios'

/**
 * @author: glows777
 * @description: 统一处理异常的函数
 * @param {any} error
 * @return {*}
 */
function httpErrorStatusHandle(error: any) {
  if (axios.isCancel(error))
    return console.error(`重复请求：${error.message}`) // 处理被取消的请求
  let message = ''
  if (error && error.response) {
    switch (error.response.status) {
      case 302:
        message = '接口重定向了！'
        break
      case 400:
        message = '参数不正确！'
        break
      case 401:
        message = '您未登录，或者登录已经超时，请先登录！'
        break
      case 403:
        message = '您没有权限操作！'
        break
      case 404:
        message = `请求地址出错: ${error.response.config.url}`
        break // 在正确域名下
      case 408:
        message = '请求超时！'
        break
      case 409:
        message = '系统已存在相同数据！'
        break
      case 500:
        message = '服务器内部错误！'
        break
      case 501:
        message = '服务未实现！'
        break
      case 502:
        message = '网关错误！'
        break
      case 503:
        message = '服务不可用！'
        break
      case 504:
        message = '服务暂时无法访问，请稍后再试！'
        break
      case 505:
        message = 'HTTP版本不受支持！'
        break
      default:
        message = '异常问题，请联系管理员！'
        break
    }
  }
  if (error.message.includes('timeout'))
    message = '网络请求超时！'
  if (error.message.includes('Network'))
    message = window.navigator.onLine ? '服务端异常！' : '您断网了！'

  ElMessage({
    type: 'error',
    message,
  })
}

export default { httpErrorStatusHandle }
