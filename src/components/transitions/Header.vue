<template>
    <div class="container">
        <PageHeader title="Transition" />
        <CodeBlock
            type="code"
            title="Vue transitions"
            content="
              Vue provides a variety of ways to apply transition effects when items are inserted, updated, or removed from the DOM.
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