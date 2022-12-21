<!--
 * @Author: glows777 1914426389@qq.com
 * @Date: 2022-12-16 13:43:12
 * @LastEditors: glows777 1914426389@qq.com
 * @LastEditTime: 2022-12-21 21:27:17
 * @FilePath: \vue-admin\src\views\example\index.vue
 * @Description: 本页仅用于展示如何使用
 *
 * Copyright (c) 2022 by glows777 1914426389@qq.com, All Rights Reserved.
-->
<script setup lang="ts">
import { useCounterStore } from '~/store/counter'
import { getListAPI } from '~/utils/api'

const counterStore = useCounterStore()

const counterPlusOne = computed(() => counterStore.counterPlusOne)
const actionCounterPlusOne = () => counterStore.increment()
const randomizeCounter = () => counterStore.randomizeCounter()

const viteApiUrl = import.meta.env.VITE_API_URL

const getList = () => {
  getListAPI().then((res) => {
    // console.log(res)
  })
}
</script>

<template>
  <h1 class="scss-test">.env.VITE_API_URL: =》 {{ viteApiUrl }}</h1>
  <h1>Counter</h1>
  <h2>{{ counterStore.count }}</h2>
  <h3>double: {{ counterStore.doubleCounter }}</h3>
  <h3>plus one : {{ counterPlusOne }}</h3>
  <el-button @click="actionCounterPlusOne">
    add one
  </el-button>
  <el-button @click="randomizeCounter">
    randomize
  </el-button>
  <el-button @click="getList">
    网络请求
  </el-button>
</template>
<style scoped lang="scss">
@import url('~/style/index.scss');
</style>
