<template>
  <div class="container">
    <CodeBlock
      type="code"
      title="Mixins structure"
      content="Mixin object can contain any component options, for this example i'll use methods object.
      i created global debounce function that i can use now in every place in my app, any event that will need a debounce functionality can have access to this method.
      "
      codeblock="
src/mixins/globalDebounce.js

export default {
  methods: {
    debounce(func, delay=300) {
      let debounceTimer;
      return function() {
        const context = this;
        const args = arguments;
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => func.apply(context, args), delay);
      };
    },

  }
};   
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