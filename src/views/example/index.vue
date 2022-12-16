<!--
 * @Author: glows777 1914426389@qq.com
 * @Date: 2022-12-16 13:43:12
 * @LastEditors: glows777 1914426389@qq.com
 * @LastEditTime: 2022-12-16 15:30:54
 * @FilePath: \vue-admin\src\views\example\index.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by glows777 1914426389@qq.com, All Rights Reserved. 
-->
<script setup lang="ts">
import { useCounterStore } from '~/store/counter'

const counterStore = useCounterStore()

const counterPlusOne = computed(() => counterStore.counterPlusOne)
const actionCounterPlusOne = () => counterStore.increment()
const randomizeCounter = () => counterStore.randomizeCounter()



</script>

<template>
    <h1>Counter</h1>
    <h2>{{counterStore.count}}</h2>
    <h3>double: {{counterStore.doubleCounter}}</h3>
    <h3>plus one : {{counterPlusOne}}</h3>
    <n-button @click="actionCounterPlusOne">add one</n-button>
    <n-button @click="randomizeCounter">randomize</n-button>
</template>