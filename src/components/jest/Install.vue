<template>
    <div class="container">
        <CodeBlock
            type="code"
            title="Install & Run tests"
            content="
             Vue provides the option to add jest in a very easy way.
            Just go to your console, check you're in the right directory and run 'vue add unit-jest'.
            It will automatically create for you a `test` folder and all the configuration + simple test.
            NOTE - All your test files should look like this: example.spec.js in the unit folder located in `test`. "
            codeblock="NOTE: you also need to install test-utils

Vue add unit-jest
npm install --save-dev @vue/test-utils

to run the tests write in your terminal 'npm run test:unit'
*make sure you in the right directory (root folder of the project)"
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