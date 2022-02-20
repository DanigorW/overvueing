import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Navbar from '@/components/globalComponents/nav/Nav'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Actions.vue', () => {
    let actions
    let getters
    let mutations
    let store

    beforeEach(() => {
        mutations = {
                SET_IS_SIDE_BAR_OPEN: jest.fn()
            },
            store = new Vuex.Store({
                mutations
            })
    })

    it('calls store action actionClick when button is clicked', () => {
        const wrapper = shallowMount(Navbar, { store, localVue })
        wrapper.get('.nav-icon').trigger('click')
        expect(mutations.SET_IS_SIDE_BAR_OPEN).toHaveBeenCalled()
    })
})