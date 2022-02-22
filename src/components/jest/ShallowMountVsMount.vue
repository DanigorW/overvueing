<template>
    <div class="container">
        <CodeBlock
            type="code"
            title="Mounting components (mount vs shallowMount)"
            content="
               You have 2 options how to mount your component, and it's very important to know the diffrences between them.
              "
        />
        <CodeBlock
            type="code"
            title="mount"
            content="
          mount method: The mount method takes a Vue component as the first argument and returns its vue instance along with some helper methods which are used to interact with a component instance like set props, trigger clicks, etc.
         
           "
            codeblock="
import { mount } from '@vue/test-utils'
            "
        />
        <CodeBlock
            type="code"
            title="shallowMount (try to use shallowMount as much as possible)"
            content="
   shallowMount method: The shallowMount method works similar to the mount method, but the main difference is that shallowMount doesn’t render the child components and this way it allows us to test the component in isolation, making sure that child components are not included in the test.      

            "
            codeblock="
import { shallowMount } from '@vue/test-utils'
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