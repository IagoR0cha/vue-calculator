import { mount } from '@vue/test-utils'
import App from '@/App';

describe('App.vue', () => {
  it('Testando se é uma instancia Vue', () => {
   
    const wrapper = mount(App)
    expect(wrapper.isVueInstance()).toBeTruthy();
  })
})
