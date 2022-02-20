<template>
    <div class="container">
        <PageHeader title="Jest" />
        <CodeBlock
            type="code"
            title="Jest in a nutshell"
            content="It's a common practice to use some test libraries in your project. One of the most popular libraries is jest (developed by facebook).
            Before pushing code to production we must run all the tests that we've written and make sure everything is passing.
            It prevents a lot of headache and debugging time - even if at first writing those test may seem like an overkill.
            In complex projects test driven development is a standard. 
            Think of a big team of developers asked to change some logic in one of your commponents writen a long time ago - it's so easy to ruin something by mistake.
            Jest is here to insure that everything is working how it's supposed to and find very fast any occuring errors.
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