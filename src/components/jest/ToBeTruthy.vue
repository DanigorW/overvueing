<template>
    <div class="container">
        <CodeBlock
            type="code"
            title="toBe, toBeTruthy, toBeFalsy, not, exists, text, toContain"
            content="
           `toBe` expects any value.
           `toBeTruthy` automatically resolves as true.
           `toBeFalsy` automatically resolves as false.
           `not` reverses boolean values.
           `exists` checks whether the value exists.
           `text` gets all the wrapper text.
           `toContain` checks whether the text provided is contained in the template.

            "
            codeblock="
import { shallowMount } from '@vue/test-utils'
import yourComponent from '@/components/../yourComponent.vue'

describe('yourComponent.vue', () => {

    it(`your test description`, () => {
        const wrapper = shallowMount(yourComponent, {
            propsData: {
                isVisible: true,
                title:'hey there'
            }
        })

        expect(wrapper.get('.content').exists()).toBeTruthy()
        expect(wrapper.get('.content').exists()).toBeFalsy()
        expect(wrapper.get('.content').exists()).not.toBeFalsy()
        expect(wrapper.get('.content').exists()).toBe(true)
        expect(wrapper.get('.content').exists()).toBe(false)
        expect(wrapper.text()).toBe('hey there')
        expect(wrapper.text()).toContain('hey there')
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