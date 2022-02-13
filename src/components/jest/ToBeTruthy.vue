<template>
    <div class="container">
        <CodeBlock
            type="code"
            title="toBe, toBeTruthy, toBeFalsy, not"
            content="
           toBe expect a boolean value.
           toBeTruthy automatically resolves as true.
           toBeFalsy automatically resolves as false.
           not can reverse boolean values.

            "
            codeblock="
import { shallowMount } from '@vue/test-utils'
import yourComponent from '@/components/../yourComponent.vue'

describe('yourComponent.vue', () => {

    it(`your test description`, () => {
        const wrapper = shallowMount(yourComponent, {
            propsData: {
                isVisible: true,
            }
        })

        //use
        expect(wrapper.get('.content').exists()).toBeTruthy()
        expect(wrapper.findComponent('.content').exists()).toBeTruthy()

        //don't use even if you see on stackoverflow/exmaples :P (deprecated)
        expect(wrapper.find('.content').exists()).toBeTruthy()

    })
})
           
            "
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