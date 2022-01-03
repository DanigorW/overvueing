<template>
  <div>
    <div class="container">
      <CodeBlock type="code" title="Caveat about mutations & actions" />
    </div>
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