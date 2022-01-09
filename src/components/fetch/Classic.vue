<template>
    <div class="container">
        <CodeBlock
            type="code"
            title="Classic fetch"
            content="

            "
            codeblock="
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(data => {
      some manipulation on data...
      or use callback function
  })  
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