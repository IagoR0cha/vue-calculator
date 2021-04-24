import { mount } from  '@vue/test-utils';

import Calculator from '@/main/Calculator';

describe("Testanto o Calculator", () => {
    // beforeAll(() => {
    //    const wrapper = mount(Calculator);
    // });

    // test('Testando o valor inicial de DisplayValue', () => {
    //     expect(Calculator.data().displayValue).toEqual('0');
    // });
    
    test('Testando valor de displayValue quando addDigit(9)', () => {
        const wrapper = mount(Calculator);
        
        wrapper.vm.addDigit('9');
        expect(wrapper.vm.displayValue).toEqual('9')
    })

    it('Testando operação de multiplicação', ()=> {
        const wrapper = mount(Calculator);

        wrapper.vm.addDigit('9');
        wrapper.vm.setOperation('*');
        wrapper.vm.addDigit('9');
        wrapper.vm.setOperation('=');

        expect(wrapper.vm.displayValue).toEqual(81);
    });

    it('Testanto o displayValue usando o click', () => {
        const wrapper = mount(Calculator);

        wrapper.findComponent({ref: 'number_nine'}).trigger('click');

        expect(wrapper.vm.displayValue).toEqual('9');
    })

    it('Testanto operação de multiplicação usando o click', () => {
        const wrapper = mount(Calculator);

        wrapper.findComponent({ref: 'number_nine'}).trigger('click');
        wrapper.findComponent({ref: 'multiplicate_operation'}).trigger('click');
        wrapper.findComponent({ref: 'number_nine'}).trigger('click');
        wrapper.findComponent({ref: 'equal'}).trigger('click');

        expect(wrapper.vm.displayValue).toEqual(81);
    })
})