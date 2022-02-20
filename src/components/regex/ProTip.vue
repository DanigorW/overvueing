<template>
    <div class="container">
        <CodeBlock
            type="code"
            title="Find regex expressions"
            content="
            It's possible to write regex expressions for any condition/test. 
            If you have a condition that you want to test just go to google and write your condition/test and add regex to it.
            For example: phone number validation regex. You will find a lot of regex expressions for your condition, just choose the one suits you the most. 
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