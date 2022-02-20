<template>
    <div class="container">
        <CodeBlock
            type="code"
            title="State"
            content="
Most of your logic functionality is located in your global state object.
This is one of the most important things to test.
Jest provides a few different ways of doing that.
It's possible to mock the different functionality of your state or acutally run test on the real state.
Personally I prefer to test the acutal state and not a mock version. It more clean and easy to read.
I'll show how to test the real state and also a mock version of the component's state.
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