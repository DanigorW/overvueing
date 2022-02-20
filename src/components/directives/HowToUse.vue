<template>
    <div class="container">
        <CodeBlock
            type="code"
            title="How to use"
            codeblock="//defult option without expression            
<p v-background>Baby blue looks good on me.</p>

//option with expression
<p v-background='green'>I prefer neon green.</p>"
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