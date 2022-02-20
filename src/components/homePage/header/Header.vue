<template>
    <div class="container">
        <PageHeader title="In progress" />
        <CodeBlock type="normal" title="Slots" />
        <CodeBlock type="normal" title="Webpack" />
        <CodeBlock type="normal" title="Seo" />
        <CodeBlock type="normal" title="Sitemaps" />
        <CodeBlock type="normal" title="Algos" />
        <CodeBlock type="normal" title="Vanilla js" />
        <PageHeader title="What's coming next" />
        <CodeBlock type="normal" title="Navigation in sections" />
        <CodeBlock type="normal" title="More code examples and case uses" />
        <CodeBlock type="normal" title="Vue v3" />
        <CodeBlock type="normal" title="Jest for vue v3" />
        <CodeBlock type="normal" title="TypeScript" />
        <CodeBlock type="normal" title="Docker" />
        <PageHeader title="Bug fixes" />
        <CodeBlock
            bg="#ff3333"
            type="normal"
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
            type="normal"
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