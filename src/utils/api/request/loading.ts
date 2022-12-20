/*
 * @Author: glows777 1914426389@qq.com
 * @Date: 2022-12-16 16:15:06
 * @LastEditors: glows777 1914426389@qq.com
 * @LastEditTime: 2022-12-16 22:55:03
 * @FilePath: \vue-admin\src\utils\api\request\loading.ts
 * @Description: 加载loading函数
 *
 * Copyright (c) 2022 by glows777 1914426389@qq.com, All Rights Reserved.
 */
const LoadingInstance: any = {
  _target: null,
  _count: 0,
}

/**
 * @author: glows777
 * @description: 关闭Loading层实例
 * @param {Partial} _options
 * @return {*}
 */
function closeLoading(_options: Partial<CustomOptionsType>) {
  if (_options.loading && LoadingInstance._count > 0)
    LoadingInstance._count--
  if (LoadingInstance._count === 0) {
    LoadingInstance._target.close()
    LoadingInstance._target = null
  }
}

export default { LoadingInstance, closeLoading }
