import Navbar from '@/store/modules/nav/Navbar'

describe('Navbar store test', () => {

    it('test if SET_IS_SIDE_BAR_OPEN mutation workking', () => {
        const state = {
            isSidebarOpen: true,
        }
        Navbar.mutations.SET_IS_SIDE_BAR_OPEN(state)
        expect(state.isSidebarOpen).toBeFalsy()
    })

    it('tests if IS_SIDE_BAR_OPEN getter working', () => {
        const state = {
            isSidebarOpen: true,
        }
        Navbar.getters.IS_SIDE_BAR_OPEN(state)
        expect(state.isSidebarOpen).toBeTruthy()
    })
})