/*
 * @Author: glows777 1914426389@qq.com
 * @Date: 2022-12-16 16:03:18
 * @LastEditors: glows777 1914426389@qq.com
 * @LastEditTime: 2022-12-16 22:58:21
 * @FilePath: \vue-admin\src\utils\api\request\index.ts
 * @Description:
 *
 * Copyright (c) 2022 by glows777 1914426389@qq.com, All Rights Reserved.
 */
import axios from 'axios'
import cancel from './cancel'
import loading from './loading'
import errorHandle from './error'

/**
 * @author: glows777
 * @description: 封装axios
 * @param {AxiosConfigType} axiosConfig
 * @param {Partial} _customOptions
 * @param {LoadingOptionType} loadingOptions
 * @return {*}
 */
function request(axiosConfig: AxiosConfigType, _customOptions: Partial<CustomOptionsType>, loadingOptions: LoadingOptionType) {
  const service = axios.create({
    // todo 这里可以结合.env文件，区分生产和开发环境
    baseURL: 'http://localhost:3000', // 设置统一的请求前缀
    timeout: 10000, // 设置统一的超时时长 10s
  })
  // todo 这里可以抽出来成为一个配置项
  const customOptions = Object.assign({
    repeat_request_cancel: true, // 是否开启取消重复请求, 默认为 true
    loading: false, // 是否开启loading层效果, 默认为false
    concise_data_format: true, // 是否开启简洁的数据结构响应, 默认为true
    error_message_show: true, // 是否开启接口错误信息展示,默认为true
    code_message_show: false, // 是否开启code不为0时的信息提示, 默认为false
  },
  _customOptions,
  )

  service.interceptors.request.use(
    (config) => {
      cancel.removePending(config)
      customOptions.repeat_request_cancel && cancel.addPending(config)
      if (customOptions.loading) {
        loading.LoadingInstance._count++
        if (loading.LoadingInstance._count === 1)
          loading.LoadingInstance._target = ElLoading.service(loadingOptions)
      }
      return config
    },
    (error) => {
      return Promise.reject(error)
    },
  )

  service.interceptors.response.use(
    (response) => {
      cancel.removePending(response.config)
      customOptions.loading && loading.closeLoading(customOptions)
      if (customOptions.code_message_show && response.data && response.data.code !== 0) {
        ElMessage({
          type: 'error',
          message: response.data.message, // 这里要根据后端的字段配合返回
        })
        return Promise.reject(response.data)
      }
      return customOptions.concise_data_format ? response.data : response
    },
    (error) => {
      error.config && cancel.removePending(error.config)
      customOptions.loading && loading.closeLoading(customOptions)
      customOptions.error_message_show && errorHandle.httpErrorStatusHandle(error)
      return Promise.reject(error)
    },
  )

  return service(axiosConfig)
}

export default request
