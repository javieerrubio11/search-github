import { mount, shallowMount } from '@vue/test-utils'
import FabToTop from '@/components/base/FabToTop.vue'

const factory = () => {
  return shallowMount(FabToTop, {
  });
};

describe('FabToTop', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(FabToTop)
    expect(wrapper.vm).toBeTruthy()
  })

  test("renders properly", () => {
    const wrapper = factory();
    expect(wrapper.html()).toMatchSnapshot();
  });
})
