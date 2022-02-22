    <template>
    <div class="container">
        <CodeBlock
            type="code"
            title="State (not mocked version) getters, mutations, actions"
            content="
First of all we need to import the state we want to test. You can have one global file which holds you entire state (not recommended!).
Or you can have multiple modules for each functionality (recommended! split your state into moudles, this way it's easier to manage and to test). But either way, we need to import it.
I'll approach it with the modules way.  
NOTE: jest donesn't recognize 'fetch/axios'. Jest doesn't run on your browser! Why is it so important to understand? 
The answer is - usually actions in your state have some async code that fetches data and then commits a mutation that updates the state with that data.
Therefore we need to create a mock version of fetch on the global object that returns promise. The mock version will replace your real fetch.
Testing the real fetch call is considered a bad practice and can cause your tests to fail if the api is down and takes a longer time to respond."
            codeblock="import Navbar from '@/store/modules/navbar/Navbar'
import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import { cloneDeep } from 'lodash'

global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve([{ name: 'test' }]),
    })
);

it(`test if GET_USERS action
    return array of users`, async() => {
    const localVue = createLocalVue()
    localVue.use(Vuex)
    const store = new Vuex.Store(cloneDeep(Navbar))
    await store.dispatch('GET_USERS')
    expect(store.state.users.length).toBeGreaterThan(0)
})

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
})"
        />
    </div>
</template>

<script>
export default {
    components: {
        CodeBlock: () =>
            import(
                /* webpackChunkName: "CodeBlock" */ "../globalComponents/codeBlock/CodeBlock.vue"
            ),
    },
};
</script>

<style>
</style>