<template>
    <div class="container">
        <CodeBlock
            type="code"
            title="Trigger event, async await, data object"
            content="
Trigger event expects the name of the event and triggers an event asynchronously.
We and use async await syntax to await the result data.
The data object can contain any real value that our component has. In the following exmaple
I'm setting iconHover to be true (by default it's set to false in the component we are testing).
It's also possible to add values that don't exist in the component, but there's no reason to do that. "
            codeblock="import { shallowMount } from '@vue/test-utils'
import yourComponent from '@/components/.../yourComponent vue'

describe('yourComponent', () => {
    it('test if nav-animation class is exists only after mouseenter event', async() => {
        const wrapper = shallowMount(yourComponent);
        await wrapper.get('.nav-icon').trigger('mouseenter')
        expect(wrapper.get('.nav-animation').exists()).toBeTruthy()
    })

    it('test if nav-animation class is removed after mouseleave event', async() => {
        const wrapper = shallowMount(Nav, {
            data() {
                return {
                    iconHover: true
                }
            }
        });
        await wrapper.get('.nav-icon').trigger('mouseleave')
        expect(wrapper.findComponent('.nav-animation').exists()).toBe(false)
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