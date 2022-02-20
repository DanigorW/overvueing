<template>
    <div class="container">
        <CodeBlock
            type="code"
            title="Done"
            content="
Ok, this is the gist of testing with jest. Testing in general is a big topic, we learned the basics must import thing to know.
How to test our state, async functionality, event, props, data, and some common matchers. 
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