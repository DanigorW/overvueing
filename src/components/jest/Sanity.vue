<template>
    <div class="container">
        <CodeBlock
            type="code"
            title="Sanity test"
            content="
                Before starting to write tests the best practice is to create a sanity test.
                DONT SKIP THIS STEP! it takes 20 seconds to write and can save you ALOT of debugging time.
                If this test passed it means that everything is configured correctly.
                If not somting went wrong.         
            "
            codeblock="
tests\unit\sanity.spec.js

it('sanity test', () => {
    expect(true).toBe(true)
})
           
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