<template>
    <div class="container">
        <PageHeader title="Filters in Vue" />
        <CodeBlock
            type="code"
            title="Filters in general"
            content="
            Filters allows you to define filters that can be used to apply common text formatting. Filters are usable in two places: mustache interpolations and v-bind expressions. Filters should be appended to the end of the JavaScript expression, denoted by the “pipe” symbol
        
            "
        />
    </div>
</template>

<script>
export default {
    components: {
        PageHeader: () =>
            import(
                /* webpackChunkName: "PageHeader" */ "../globalComponents/pageHeader/PageHeader.vue"
            ),
        CodeBlock: () =>
            import(
                /* webpackChunkName: "CodeBlock" */ "../globalComponents/codeBlock/CodeBlock.vue"
            ),
    },
};
</script>

<style>
</style>