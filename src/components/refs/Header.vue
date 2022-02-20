<template>
    <div class="container">
        <PageHeader title="$refs" content="" />
        <CodeBlock
            type="code"
            title="What is $refs"
            content="If you familiar with queryselector & querySelectorAll from js refs here to replace them.
            If you have element that you need or want to access we will us refs. 
            This is simple example that changes the background color on load. 
            Usuely we will want to use refs on some form of logic (show/hide loaders etc...)
        "
            codeblock="<template>
    <div>
        <h1 ref='test'>header text</h1>
    </div>
</template>

<script>
export default {
    mounted() {
        const h1 = this.$refs.test;
        h1.style.backgroundColor = '#66bb6a';
    },
};
</script>"
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