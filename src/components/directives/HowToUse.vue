<template>
    <div class="container">
        <CodeBlock
            type="code"
            title="How to use"
            codeblock="
<!-- will color the background in blue + 3 seconds delay  -->
<p v-highlight:background.delayed='blue'>text</p>

<!-- will color the text in red widout delay-->
<p v-highlight='red'>text</p>

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