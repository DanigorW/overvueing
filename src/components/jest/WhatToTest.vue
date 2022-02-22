<template>
    <div class="container">
        <CodeBlock
            type="code"
            title="What TO test"
            content="
                        The better approach is to test the core logic of the code we've actually written.
               Test your components functions - check if the functionality works.
               Test your getters, mutations, actions functionality (vuex).
               Focus as much as possible on the logic and not the UI.
               If the template/ui/class/css changes - it shouldn't affect your tests, therefore there is no reason to test it.
               In the section above I told not to test props - it has a caveat: if you have a complex logic that renders content depending on props - in this case test the logic itself with the corresponding props needed for your functionality.
              
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