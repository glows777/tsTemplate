/*
 * @Author: glows777 1914426389@qq.com
 * @Date: 2022-12-28 15:15:59
 * @LastEditors: glows777 1914426389@qq.com
 * @LastEditTime: 2022-12-30 10:03:49
 * @FilePath: \vue-admin\src\test\example.test.ts
 * @Description: 测试组件--例子
 *
 * Copyright (c) 2022 by glows777 1914426389@qq.com, All Rights Reserved.
 */
import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import notification from '~/components/notification.vue'

describe('notification.vue', () => {
  test('color render error type correctly', () => {
    const type = 'error'

    const wrapper = mount(notification, {
      props: { type },
    })

    expect(wrapper.classes()).toEqual(
      expect.arrayContaining(['notification--error']),
    )
  })

  test('color render success type correctly', () => {
    const type = 'success'

    const wrapper = mount(notification, {
      props: { type },
    })

    expect(wrapper.classes()).toEqual(
      expect.arrayContaining(['notification--success']),
    )
  })

  test('color render info type correctly', () => {
    const type = 'info'

    const wrapper = mount(notification, {
      props: { type },
    })

    expect(wrapper.classes()).toEqual(
      expect.arrayContaining(['notification--info']),
    )
  })

  test('slides down when message is not empty', () => {
    const message = 'success'
    const wrapper = mount(notification, {
      props: { message },
    })
    expect(wrapper.classes()).toEqual(
      expect.arrayContaining(['notification--slide']),
    )
  })

  test('slides up when message is empty', () => {
    const message = ''
    const wrapper = mount(notification, {
      props: { message },
    })
    expect(wrapper.classes('notification--slide')).toBe(false)
  })

  test('emits event when close button is clicked', async () => {
    const wrapper = mount(notification, {
      data() {
        return {
          clicked: false,
        }
      },
    })
    const closeButton = wrapper.find('button')
    await closeButton.trigger('click')
    expect(wrapper.emitted()).toHaveProperty('clearNotification')
  })

  test('renders message when message is not empty', () => {
    const message = 'Something happened, try again'
    const wrapper = mount(notification, {
      props: { message },
    })
    expect(wrapper.find('p').text()).toBe(message)
  })
})
