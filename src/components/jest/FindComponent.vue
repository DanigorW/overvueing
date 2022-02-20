<template>
    <div class="container">
        <CodeBlock
            type="code"
            title="find, findAll, findComponent, findAllComponents, get"
            content="
            find & findAll are deprecated, don't use them.
            Use findComponent & findAllComponents. What are they doing?
            findComponent receives a css selector (class/id) and looks for it on the mounted component. Same goes for findAllComponents, but for all the elements.
            You can think of them as queryselector & querySelectorAll - they accomplish the same purpose.
            If you know for sure that your class/id exists on the template - use get instead.
            `get` get's the element immediately and runs faster.
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