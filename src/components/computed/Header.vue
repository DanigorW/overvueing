<template>
    <div class="container">
        <PageHeader title="Computed properties in Vue" />
        <CodeBlock
            type="code"
            title="Computed properties"
            content="
          
Computed properties are another powerful feature from Vue that allows us to transform or perform calculations on our data and then easily reuse the result as an up-to-date variable in our template. Computed properties are very useful and should replace complex in-template expressions.
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