<template>
    <div class="container">
        <CodeBlock
            type="code"
            title="Async await"
            content="

            "
            codeblock="async const fetchData = (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      //some manipulation on data...
      
    } catch (error) {
        alert(error)
    }
}"
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