import { shallowMount } from '@vue/test-utils'
import CodeBlock from '@/components/globalComponents/codeBlock/CodeBlock.vue'

describe('CodeBlock.vue', () => {

    it(`test if content is renderd if prop type == normal
        if this test pass it's means that all the outher props
        and content renderd as well`, () => {
        const wrapper = shallowMount(CodeBlock, {
            propsData: {
                type: 'normal',
                title: 'test'
            }
        })
        expect(wrapper.get('.title').exists()).toBeTruthy()

    })

    it(`test if content is renderd if prop type == code
    if this test pass it's means that all the outher props
    and content renderd as well`, () => {
        const wrapper = shallowMount(CodeBlock, {
            propsData: {
                type: 'code',
                title: 'test',
            }
        })
        expect(wrapper.get('.code-title').exists()).toBeTruthy()
    })
})