<template>
    <div class="container">
        <CodeBlock
            type="code"
            title="beforeMount"
            content="
  Called right before the mounting begins: the render function is about to be called for the first time.
  Honestly i never used this lifecycle hook... so there for i don't have an example to provide.          
            "
            codeblock="<script>
export default {
    beforeMount(){
      //do something
      //what? i don't know :)
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