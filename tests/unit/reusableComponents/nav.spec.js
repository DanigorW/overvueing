import Vuex from 'vuex'
import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import Nav from '@/components/globalComponents/nav/Nav.vue'
import Navbar from '@/store/modules/nav/Navbar'

Vue.use(Vuex)

const store = new Vuex.Store(Navbar)

describe('Nav.vue', () => {

    it('tests if Nav components loaded', () => {
        const wrapper = shallowMount(Nav, {
            store,
        })
        expect(wrapper.exists()).toBeTruthy()
    })

    it('tests if store loaded', () => {
        const wrapper = shallowMount(Nav, {
            store,
        })
        expect(store).toBeTruthy()
    })

    it('tests if store mutation SET_IS_SIDE_BAR_OPEN working', () => {
        const wrapper = shallowMount(Nav, {
            store,
        })
        wrapper.vm.SET_IS_SIDE_BAR_OPEN()
        expect(wrapper.vm.$store.state.isSidebarOpen).toEqual(false)
    })





    it('tests if class nav-animation-2-span exists after mouseenter event', async() => {
        const wrapper = shallowMount(Nav);
        await wrapper.setData({ iconHover: false });
        await wrapper.get(".nav-icon").trigger('mouseenter')
        await wrapper.setData({ iconHover: true });
        expect(wrapper.get('.nav-animation-2-span').exists()).toBeTruthy()
    })
})