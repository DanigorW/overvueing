import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Navbar from '@/components/globalComponents/sidebar/Sidebar'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Actions.vue', () => {
    let getters
    let store

    beforeEach(() => {
        getters = {
            IS_SIDE_BAR_OPEN: () => true;
        }
        store = new Vuex.Store({
            mutations
        })
    })

    it('calls store action actionClick when button is clicked', () => {
        const wrapper = shallowMount(Sidebar, { store, localVue })
        wrapper.get('.nav-icon').trigger('click')
        expect(mutations.SET_IS_SIDE_BAR_OPEN).toHaveBeenCalled()
    })
})