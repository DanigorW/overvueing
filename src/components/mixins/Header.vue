<template>
    <div class="container">
        <PageHeader title="Mixins in vue" />
        <CodeBlock
            type="code"
            title="Mixins in general"
            content="Mixins are a flexible way to distribute reusable functionalities for Vue components.
      A mixin object can contain any component options. When a component uses a mixin
      all the data in the mixin will be “mixed” into the component’s own options.
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