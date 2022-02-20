<template>
    <div class="container">
        <CodeBlock
            type="code"
            title="Axios"
            content="

            "
            codeblock="const getData = async () => {
    try {
      const data = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
      const {title} = data.data
      // do something with data

    } catch (error) {
        console.log(error);
    }
}            "
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