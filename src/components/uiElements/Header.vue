<template>
    <div class="container">
        <PageHeader title="UI elements" content="" />
        <CodeBlock
            type="code"
            title="Here you will finde UI compontents that ready to use"
            content="If you see something you like just go to the component page and copy the code.
            very useful when you don't want to use 3rd party libraries and get full control over your code and style.'
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