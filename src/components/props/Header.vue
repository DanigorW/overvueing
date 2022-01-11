<template>
    <div class="container">
        <PageHeader title="Props with vue" />
        <CodeBlock
            type="code"
            title="Props in components"
            content="We can control components logic and appearance (style/class) with props,
            Vue provides two different ways to add props, the first one is with simple array syntax and the second one
            is with object syntax that provides more options such as types (ts), default values and more.
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