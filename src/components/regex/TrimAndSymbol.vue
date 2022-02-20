<template>
    <div class="container">
        <CodeBlock
            type="code"
            title="Trim white space and remove symbols"
            content="
            In js we can use trim to remove all the whitespaces from a string (except between words).
            But if you need to trim a string (between words as well) and remove special symbols use regex.
            "
            codeblock="
const removeWhiteSpacesAndSymbols = (value) => {
    return value.replace(/[^\w]/g, '');
};
        "
        />
    </div>
</template>

<script>
export default {
    components: {
        CodeBlock: () =>
            import(
                /* webpackChunkName: "CodeBlock" */ "../globalComponents/codeBlock/CodeBlock.vue"
            ),
    },
};
</script>

<style>
</style>