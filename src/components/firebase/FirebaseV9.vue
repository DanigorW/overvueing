<template>
    <div class="container">
        <PageHeader title="Firebase & firestore V9" />
        <CodeBlock
            type="code"
            title="Update version 9"
            content="In a few sections below you will finde firebase config version 8.0.0 and how to use it. Firebase had a massive update in version 9 and alot thing are changed.
            One of the best things in version 9 it's the support of tree shaking, we DON'T need to import ALL firebase now and can use only the things we need.            "
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