<template>
    <div class="container">
        <CodeBlock
            type="code"
            title="How to use"
            codeblock="

<template>
    <div>
       your text value | capitalize
       { name | capitalize } <- NOTE - it's need to be in double curly brackets!
    </div>
</template>

<script>
export default {
   filters: {
     capitalize (value) {
     if (!value) return '';
     value = value.toString();
     return value.charAt(0).toUpperCase() + value.slice(1);
  },
 }
};
</script>
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