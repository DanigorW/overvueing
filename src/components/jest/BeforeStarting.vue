<template>
    <div class="container">
        <CodeBlock
            type="code"
            title="propsData"
            content="
            When testing it's important to know that we can provide our tests props.
            When we mount our components and thay have props the props are mounting to.
            We can change the default value of the props before we start testing.
            Why to do so? If we want to test logic thet show diffrent content depends on props vlaue.
            As you see in the example below, i'm changing the value of the defult props to check if the content 
            exists on the page or not.
            The content is visible on the page only if prop set to true, by default the prop valus is false.
            The props name must be exact like the original props names.
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