<template>
    <div class="container">
        <CodeBlock
            type="code"
            title="trigger event, async await, data object"
            content="
trigger event expect  the name of the event.
async await works exactly as expected, same as fetch with async await.
The data object can have any real value that the component have, in this exmaple
i'm seting iconHover to be true. By default he is set to false on the component we testing.
It's possible to add values that not exist on the component, but there's no reason to that.
        "
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