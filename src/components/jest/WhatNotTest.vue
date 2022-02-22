<template>
    <div class="container">
        <CodeBlock
            type="code"
            title="What NOT to test"
            content="
      When starting with tests it's really important to know what to test.
               Theoretically you can cover 100% of you code (logic, html, css, routes, state etc...) but this is highly not recommended!
               Don't go this way, it's impossible to maintain your code this way.
               Think of two way data binding and how it works, 100% code coverage will be the same as adding to all of your code two way data binding - every little change you will add to your template/css/class/logic etc... will make you tests fail.
               We want to aviod changing and adjusting our test as much as possible.         
               DON'T test Vue core functionality! If you're using props for example - you don't need to test them.
               Don't waste time on testing Vue core functionality. Trust Vue to do it's thing.
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