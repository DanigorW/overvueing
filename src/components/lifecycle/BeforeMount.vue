<template>
    <div class="container">
        <CodeBlock
            type="code"
            title="beforeMount"
            content="
  Called right before the mounting begins: the render function is about to be called for the first time.
            "
            codeblock="<script>
export default {
    beforeMount(){
      //do something
    },
}
</script>"
        />
    </div>
</template>

<script>
export default {
    beforeCreate() {},
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