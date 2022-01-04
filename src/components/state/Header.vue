<template>
  <div>
    <div class="container">
      <PageHeader title="State best practices with Vuex" />
      <CodeBlock
        type="code"
        contentTitle="Default"
        title="Folder structure"
        content="By default after creating new vue project with the cli the store folder structure is very basic, it's good for learning and very small apps, for bigger apps the best way to structure the state folder is to split it to modules for better and easy maintenance, you can clearly see in the example below why it's more easy to maintenance modules structure."
      />
    </div>
  </div>
</template>

<script>
import stateDefault from "../../assets/state-normal.png";
export default {
  data() {
    return {
      stateDefault,
    };
  },
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

<style>
</style>