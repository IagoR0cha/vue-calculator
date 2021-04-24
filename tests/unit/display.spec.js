import { mount } from '@vue/test-utils';

import Display from '@/components/Display';

describe('Teste do Display.vue', () => {
    it('Testando DOM recebendo do props', () => {
        const wrapper = mount(Display, {
            propsData:{
                value: "9"
            }
        });
    
        const display = wrapper.find('.display');
    
        expect(display.text()).toEqual('9');
    })
})