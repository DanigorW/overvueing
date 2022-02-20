import Navbar from '@/store/modules/navbar/Navbar'
import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import { cloneDeep } from 'lodash'

global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve({ name: 'test' }),
    })
);

it(`test if SET_IS_SIDE_BAR_OPEN mutation
    changes isSidebarOpen to false`, () => {
    const localVue = createLocalVue()
    localVue.use(Vuex)
    const store = new Vuex.Store(cloneDeep(Navbar))
    expect(store.state.isSidebarOpen).toBeTruthy()
    store.commit('SET_IS_SIDE_BAR_OPEN')
    expect(store.state.isSidebarOpen).toBeFalsy()
})

it(`test if IS_SIDE_BAR_OPEN getter
    return isSidebarOpen status`, () => {
    const localVue = createLocalVue()
    localVue.use(Vuex)
    const store = new Vuex.Store(cloneDeep(Navbar))
    expect(store.getters.IS_SIDE_BAR_OPEN).toBeTruthy()
})

it(`test if GET_ALL_ROUTES getter
    return array of routes`, () => {
    const localVue = createLocalVue()
    localVue.use(Vuex)
    const store = new Vuex.Store(cloneDeep(Navbar))
    expect(store.getters.GET_ALL_ROUTES.length).toBeGreaterThan(0)
})