/*
 * @Author: glows777 1914426389@qq.com
 * @Date: 2022-11-10 13:01:11
 * @LastEditors: glows777 1914426389@qq.com
 * @LastEditTime: 2022-12-28 15:13:06
 * @FilePath: \vue-admin\vite.config.ts
 * @Description:
 *
 * Copyright (c) 2022 by glows777 1914426389@qq.com, All Rights Reserved.
 */
/// <reference types="vitest" />
import path from 'path'
import type { ConfigEnv, UserConfigExport } from 'vite'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { viteMockServe } from 'vite-plugin-mock'

// https://vitejs.dev/config/
export default ({ mode, command }: ConfigEnv): UserConfigExport => defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'pinia',
      ],
      resolvers: [ElementPlusResolver()],
    }),
    viteMockServe({
      supportTs: true,
      mockPath: './src/mock',
      localEnabled: command === 'serve',
      // prodEnabled: command !== 'dev',
      watchFiles: true,
    }),
    Components({
      dirs: ['src/components'],
      resolvers: [ElementPlusResolver()],
      dts: true,
    }),
  ],
  test: {
    globals: true,
    environment: 'happy-dom',
    transformMode: {
      web: [/.[tj]sx$/], // 支持TSX，JSX
    },
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
    },
    extensions: ['.js', '.json', '.ts'],
  },
  server: {
    port: 3000,
    proxy: {
      '/api': {
        // 以/api开头的接口都代理到target指定的域名下
        target: 'http://localhost:8888',
        changeOrigin: true,
        // 代替，后端的接口没有/api前缀，而前端有，所以要替换掉
        // rewrite: (path) => path.replace(/^\/api/, ""),
      },
      '/mock/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/mock/, ''),
      },
    },
  },
  define: {
    'process.env': loadEnv(mode, process.cwd()),
  },
})
