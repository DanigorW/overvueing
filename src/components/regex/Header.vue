<template>
    <div class="container">
        <PageHeader title="Regex expressions" content="" />
        <CodeBlock
            type="code"
            title="What is regex and way to use regex expressions"
            content="Regular expressions (regex or regexp) are extremely useful in extracting information from any text by searching for one or more matches of a specific search pattern.
            Why to use regex? it saves ALOT of time. Think of form validation for exmaple, if you have a few different input that you want to validate with diffrent conditions. regex can make your life easier."
        />
        <PageHeader title="Useful regex expressions" content="" />
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