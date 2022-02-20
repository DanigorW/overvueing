import { shallowMount } from '@vue/test-utils'
import Nav from '@/components/globalComponents/nav/Nav.vue'

describe('Nav.vue', () => {

    it('tests if class nav-animation-2-span exists after mouseenter event', async() => {
        const wrapper = shallowMount(Nav);
        await wrapper.get(".nav-icon").trigger('mouseenter')
        expect(wrapper.get('.nav-animation-2-span').exists()).toBeTruthy()
    })

    it('tests if class nav-animation-2-span not exists after mouseenter event', async() => {
        const wrapper = shallowMount(Nav, {
            data() {
                return {
                    iconHover: true
                }
            }
        });

        await wrapper.get(".nav-icon").trigger('mouseleave')
        expect(wrapper.findComponent('.nav-animation-2-span').exists()).toBe(false)
    })
})