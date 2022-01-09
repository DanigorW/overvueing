<template>
    <div class="container">
        <PageHeader title="Directives in vue" />
        <CodeBlock
            type="code"
            title="directives in general"
            content="
          In addition to the default set of directives shipped in core (v-model and v-if etc...), Vue also allows you to register your own custom directives. 
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