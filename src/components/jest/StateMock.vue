    <template>
    <div class="container">
        <CodeBlock
            type="code"
            title="State with components (mocked version) actions"
            content="
In this example we can see that actions, getters and mutations in our test work according to the same principle.            
We don’t really care what the actions do, or what the store looks like. We just need to know that actions are being fired when they should, and that they are fired with the expected payload value.
To test this, we need to pass a mock store to Vue when we shallowMount our component. 
"
            codeblock="import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Navbar from '@/components/reusableComponents/navbar/Navbar'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Actions.vue', () => {
  let actions
  let store

  beforeEach(() => {
    actions = {
      SET_IS_SIDE_BAR_OPEN: jest.fn()
    }
    store = new Vuex.Store({
      actions
    })
  })

  it('calls store action SET_IS_SIDE_BAR_OPEN when .nav-icon is clicked', () => {
    const wrapper = shallowMount(Navbar, { store, localVue })
    wrapper.get('.nav-icon').trigger('click')
    expect(actions.SET_IS_SIDE_BAR_OPEN).toHaveBeenCalled()
  })
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