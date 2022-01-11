<template>
  <div class="container">
    <PageHeader title="Forms in vue" />
    <CodeBlock
      type="code"
      title="The right approach"
      content=""
      codeblock="

           
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