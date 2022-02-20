<template>
    <div class="container">
        <CodeBlock
            type="code"
            title="Check if there's symbol in a string"
            content="Same as numbers above, here we want to test if ths user input has any special symbols.
            In most cases you will want to combine numbers and symbols.
            "
            codeblock="
const hasSymbole = (value) => {
    let regex = /[ `!@#$%^&*()_+\-=\[\]{};':'\\|,.<>\/?~]/;
    return regex.test(value);
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