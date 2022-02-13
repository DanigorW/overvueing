<template>
    <div class="container">
        <PageHeader title="Jest" />
        <CodeBlock
            type="code"
            title="Jest in a nut shell"
            content="It's common practice to use some test librarie on your project. One of the most popular librarie is jest (developed by facebook).
            Before pushing code to production we need to run all the tests that we written and to check that everything is passing.
            It prevents a lot of headique and debugging time even if some time it's seem like an overkill.
            In big projects it's standard this day's. 
            Think of a big team of developers and someone asked to change some logic in one of your commponent you writen a long time ago, it's so easy to ruin something by mistake.
            Jest is here to insure that everything is working how it's supposed to and flag very fast errors.
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