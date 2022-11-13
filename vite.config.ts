/*
 * @Author: glows777 1914426389@qq.com
 * @Date: 2022-11-10 13:01:11
 * @LastEditors: glows777 1914426389@qq.com
 * @LastEditTime: 2022-11-10 13:41:49
 * @FilePath: \vue-admin\vite.config.ts
 * @Description:
 *
 * Copyright (c) 2022 by glows777 1914426389@qq.com, All Rights Reserved.
 */
import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: [
        'vue',
        {
          'naive-ui': [
            'useDialog',
            'useMessage',
            'useNotification',
            'useLoadingBar',
          ],
        },
      ],
    }),
    Components({
      dirs: ['src/components'],
      resolvers: [NaiveUiResolver()],
      dts: true,
    }),
  ],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
    },
  },
})
