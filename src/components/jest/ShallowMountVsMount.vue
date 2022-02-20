<template>
    <div class="container">
        <CodeBlock
            type="code"
            title="Mounting components (mount vs shallowMount)"
            content="
               You have 2 options how to mount your component, and it's very important to know the diffrences between them."
        />
        <CodeBlock
            type="code"
            title="mount"
            content="
        mount method: The mount method takes the Vue component as a first argument and returns its vue instance along with some helper which is used to interact with a component instance like set props, trigger clicks, etc.
            "
            codeblock="import { mount } from '@vue/test-utils'"
        />
        <CodeBlock
            type="code"
            title="shallowMount (try to use shallowMount as much as possible)"
            content="
                      shallowMount method: The shallowMount method also works similar to the mount method the main difference is shallowMount doesn’t render child components so that it allows us to test the component in isolation to make sure that child components are not included in the test.      

            "
            codeblock="import { shallowMount } from '@vue/test-utils'"
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