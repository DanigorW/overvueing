<template>
    <div class="container">
        <PageHeader title="Directives in Vue" />
        <CodeBlock
            type="code"
            title="directives in general"
            content="
          In addition to the default set of directives shipped with Vue (v-model, v-if/show, v-for etc...),
          Vue also allows you to register your own custom directives. Note that in Vue 2.0,
          the primary form of code reuse and abstraction is components
          - however there may be cases where you need some low-level DOM access on plain elements, and this is where custom directives would still be useful. An example would be focusing on an input element. 
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