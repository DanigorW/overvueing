<template>
    <div class="container">
        <PageHeader title="What's coming next" />
        <CodeBlock type="code" title="Vue v3" />
        <CodeBlock type="code" title="TypeScript" />
        <CodeBlock type="code" title="Docker" />
        <PageHeader title="Bug fixes" />
        <CodeBlock
            bg="#ff3333"
            type="code"
            title="single quotes"
            content="Currently all the code examples are in single quotes.
            If you copy code from snippets your code editor can throw erros.
            Just change the single quotes to double quotes.
            The reason it happens is because how props work with code snippets examples.
            I'm still trying to figure it out.
        "
        />
        <CodeBlock
            bg="#ff3333"
            type="code"
            title="typos"
            content="YuO Nokw hwo it is... :P"
        />
    </div>
</template>

<script>
export default {
    components: {
        PageHeader: () =>
            import(
                /* webpackChunkName: "PageHeader" */ "../../globalComponents/pageHeader/PageHeader.vue"
            ),
        CodeBlock: () =>
            import(
                /* webpackChunkName: "CodeBlock" */ "../../globalComponents/codeBlock/CodeBlock.vue"
            ),
    },
};
</script>

<style>
</style>