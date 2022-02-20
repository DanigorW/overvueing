<template>
    <div class="container">
        <CodeBlock
            type="code"
            title="Done"
            content="
Ok, that's it about testing with jest. Testing in general is a huge topic, we've covered the basic most important things to know:
how to test our state, testing async functionality, events, props, data, and some other most common cases.
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