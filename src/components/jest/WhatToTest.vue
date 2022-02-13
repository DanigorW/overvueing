<template>
    <div class="container">
        <CodeBlock
            type="code"
            title="What TO test"
            content="
               The better approach is to test core logic.
               Test your components functions - check if the functionality works.
               Test your getters,mutations,actions functionality (vuex).
               Focus as much as possible on the logic and not the ui.
               If the template/ui/class/css changes it doesn't should effects your tests, so no reason to test it.
               In the section above i said not to test props, it have a caveat, if you have complex logic that render content depends on props test the logic it self with the props needed.
                
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