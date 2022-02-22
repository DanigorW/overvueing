<template>
    <div class="container">
        <PageHeader title="$refs" content="" />
        <CodeBlock
            type="code"
            title="What is $refs"
            content="If you're familiar with queryselector & querySelectorAll from js - refs are here to replace them.
            It allows us to obtain a direct reference to a specific DOM element or child component instance after it's mounted. 
            This is simple example in which we change a background color on load. 
            Usually we will use refs when dealing with some form logic (for example show/hide loaders etc...),
            programmatically focus an input on component mount, or initialize a 3rd party library on an element.  "
            codeblock="<template>
    <div>
        <h1 ref='test'>header text</h1>
    </div>
</template>

<script>
export default {
    mounted() {
        const h1 = this.$refs.test;
        h1.style.backgroundColor = '#66bb6a';
    },
};
</script>"
        />
    </div>
</template>

<script>
export default {
    components: {
        PageHeader: () =>
            import(
                /* webpackChunkName: "PageHeader" */ "../globalComponents/pageHeader/PageHeader.vue"
            ),
        CodeBlock: () =>
            import(
                /* webpackChunkName: "CodeBlock" */ "../globalComponents/codeBlock/CodeBlock.vue"
            ),
    },
};
</script>

<style>
</style>