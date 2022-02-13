<template>
    <div class="container">
        <CodeBlock
            type="code"
            title="What NOT to test"
            content="
               When starting with tests it's really important to know what to test.
               Theoretically you can cover 100% of you code (logic,html,css,route,state etc...) this is highly not recommended!
               Don't go this way, It's impossible to mainten your code this way.
               Think of two way data binding and how it works, 100% code coverage will be the same as adding to all of your code two way data binding, every little change you will add to your template/css/class/logic etc... will make you tests to fail.
               We want to aviod chaneging our test as much as possible.         
               DON'T test vue core functionality! if you using props for example you don't need to test them.
               don't waste time on testing vue core functionality. trust vue to do is thing.
     
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