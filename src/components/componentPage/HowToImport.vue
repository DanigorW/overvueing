<template>
    <div>
        <div class="container">
            <CodeBlock
                type="code"
                title="How to import"
                codeblock="export default {
    components: {
        Header : () =>
            import(
                /* webpackChunkName: 'Header' */ '../components/globalReusableComponents/globalButton/GlobalButton.vue'
        ),
    },
};
</script>"
            />
        </div>
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