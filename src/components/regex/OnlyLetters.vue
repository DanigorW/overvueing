<template>
    <div class="container">
        <CodeBlock
            type="code"
            title="Accept only letters"
            content="
            Automatically accept only letters, user can't type numbers or symbols.
            "
            codeblock="
const onlyLetters = (value) => {
    let regex = /^[A-Z]+$/i;
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