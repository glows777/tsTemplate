<!--
 * @Author: glows777 1914426389@qq.com
 * @Date: 2022-12-16 13:43:12
 * @LastEditors: glows777 1914426389@qq.com
 * @LastEditTime: 2022-12-30 09:07:51
 * @FilePath: \vue-admin\src\views\example\index.vue
 * @Description: 本页仅用于展示如何使用
 *
 * Copyright (c) 2022 by glows777 1914426389@qq.com, All Rights Reserved.
-->
<script setup lang="ts">
import { useCounterStore } from '~/store/counter'
import { getListAPI, getMockUserStatus } from '~/utils/api'

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

const labelArr: string[] = reactive([])
const triggerMockRequest = async () => {
  const res = await getMockUserStatus()
  res.data.forEach((item: { label: string; value: number }) => labelArr.push(item.label))
}
</script>

<template>
  <!-- <hello-world msg="hhh"></hello-world> -->
  <notification type="error" message="uuuu" />
  <h1 class="scss-test">
    .env.VITE_API_URL: =》 {{ viteApiUrl }}
  </h1>
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
  <el-button @click="triggerMockRequest">
    mock请求
  </el-button>
  <div v-for="item in labelArr" :key="item">
    {{ item }}
  </div>
</template>

<style scoped lang="scss">
@import url('~/style/index.scss');
</style>
