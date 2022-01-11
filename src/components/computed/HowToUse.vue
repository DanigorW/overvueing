<template>
  <div class="container">
    <CodeBlock
      type="code"
      title="How to use"
      content="
        Let's assume
            "
      codeblock="

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