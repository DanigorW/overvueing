<template>
    <div class="container">
        <CodeBlock
            type="code"
            title="created"
            content="
    Called synchronously after the instance is created. At this stage, the instance has finished processing the options which means the following have been set up: data observation, computed properties, methods, watch/event callbacks. However, the mounting phase has not been started, and the $el property will not be available yet.
    created is great for fetching data before the component mounted to the DOM.       
            "
            codeblock="<script>
export default {
    created(){
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => {
            //do something
        })
    },
}
</script>"
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