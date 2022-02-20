<template>
    <div class="container">
        <CodeBlock
            type="code"
            title="Local"
            content="
      You can define local filters in a component’s options:
            "
            codeblock="<script>
filters: {
   capitalize (value) {
   if (!value) return '';
   value = value.toString();
   return value.charAt(0).toUpperCase() + value.slice(1);
  },
 }

</script>          "
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