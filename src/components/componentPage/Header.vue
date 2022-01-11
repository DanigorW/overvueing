<template>
  <div>
    <div class="container">
      <PageHeader title="Components in Vue" />
      <CodeBlock
        type="code"
        title="Components in general"
        content="
        The building blocks of any framework, in Vue you can create reusable components and use them wherever you like, you can create more complex components that can be controlled via props and change the behavior and run different logic if needed - think about normal webpage/crm/cms - you can have multiple buttons that do different actions so in that case the better approach is to create button component that you can control the behavior and logic by adding props.
        "
      />
    </div>
  </div>
</template>

<script>
export default {
  components: {
    PageHeader: () =>
      import(
        /* webpackChunkName: "PageHeader" */ "../globalComponents/pageHeader/PageHeader.vue"
      ),
    CodeBlock: () =>
      import(
        /* webpackChunkName: "CodeBlock" */ "../globalComponents/codeBlock/CodeBlock.vue"
      ),
  },
};
</script>

<style scoped>
</style>