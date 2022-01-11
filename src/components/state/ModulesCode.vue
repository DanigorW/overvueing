<template>
  <div>
    <div class="container">
      <div class="mt-40">
        <CodeBlock
          type="code"
          contentTitle="Default"
          title="Modules js file structure"
          content="All the js files in the modules folder have the same structure as the main store/index file,
          state, mutations, action and getters. Behind the scenes all the modules files are merged into the main store file (on build and on every save)  
          "
          codeblock="
export default {
   state: {},
   mutations: {},
   actions: {},
   getters: {}
}
          "
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
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