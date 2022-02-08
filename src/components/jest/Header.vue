<template>
    <div class="container">
        <PageHeader title="Lifecycle hooks with vue" />
        <CodeBlock
            type="code"
            title="Lifecycle in general"
            content="Lifecycle in components is the way to control things that we want to happen before or after 
      the component is rendered to the dom. Most of the times, if you need to fetch data from any backend api on page load 
      you will use lifecycle hook to do so.
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