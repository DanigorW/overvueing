<template>
  <div class="container">
    <CodeBlock
      type="code"
      title="beforeCreate"
      content="
      Called synchronously immediately after the instance has been initialized, before data observation and event/watcher setup.
            "
      codeblock="
<script>
export default {
    beforeCreate(){
        <!-- do something -->
    },
}
</script>          
            "
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