<template>
    <div class="container">
        <CodeBlock
            type="code"
            title="Global mixins"
            content="
            It is possible to create global mixin and use it like normal function anywhere you want without importing from mixins folder/file, 
            NOTE - try to avoide using global mixins, it can create a strange behavior and run more times than what you are expecting.
            "
            codeblock="src\main.js
Vue.mixin({
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
})              "
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