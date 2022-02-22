<template>
    <div class="container">
        <CodeBlock
            type="code"
            title="propsData"
            content="
            When testing it's important to know that we can provide props to our tests.
            When we mount our components and they have props - the props are mounted too.
            We can change the default value of the props before we start testing.
            Why to do so? If we want to test a logic that shows diffrent content depending on our props value.
            As you see in the example below, I'm changing the value of the default props to check whether the content 
            exists on the page or not.
            The content is visible on the page only if prop is set to true, by default the prop valus is false.
            The props names must be exactly like the original props names.
            "
            codeblock="import { shallowMount } from '@vue/test-utils'
import yourComponent from '@/components/../yourComponent.vue'

describe('yourComponent.vue', () => {
    it(`your test description`, () => {
        const wrapper = shallowMount(yourComponent, {
            propsData: {
                isVisible: true,
            }
        })
        expect(wrapper.get('.content').exists()).toBeTruthy()
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