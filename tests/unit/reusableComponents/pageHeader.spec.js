import { shallowMount } from '@vue/test-utils'
import PageHeader from '@/components/globalComponents/pageHeader/PageHeader.vue'

describe('PageHeader.vue', () => {

    it('render props text', () => {
        const wrapper = shallowMount(PageHeader, {
            propsData: {
                title: 'test',
                dependency: 'test'
            }
        })
        expect(wrapper.findComponent("#page-header h1").text()).toBe('test')
        expect(wrapper.findComponent("#page-header h5").text()).toBe('test')

    })
})