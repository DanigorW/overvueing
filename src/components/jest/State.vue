<template>
    <div class="container">
        <CodeBlock
            type="code"
            title="State"
            content="
Must of your logic functionality is located in your global state object.
This is one of the must important things to test.
Jest provides a few different ways of doing that.
It's possible to mock the different functionality of your state or acutally test the real state.
Personally i prefer to test the acutal state and not a mock version. It more clean and easy to read.
I'll show how to test the real state and a mock version that works with components.
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