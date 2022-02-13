<template>
    <div class="container">
        <CodeBlock
            type="code"
            title="find, findAll, findComponent, findAllComponents, get"
            content="
            find & findAll are deprecated, don't use them.
            Use findComponent & findAllComponents, what thay do ?
            findComponent receives a css selcctor (class/id) and look for it on the mounted component. Same goes for findAllComponents but for all the elemnts.
            Think of them as queryselector & querySelectorAll.
            If you know for 100% that your class/id  exist on the template use get insted.
            get get's the element immediately and run faster.
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