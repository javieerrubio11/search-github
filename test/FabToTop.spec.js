import { mount } from '@vue/test-utils'
import FabToTop from '@/components/base/FabToTop.vue'

describe('FabToTop', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(FabToTop)
    expect(wrapper.vm).toBeTruthy()
  })
})
