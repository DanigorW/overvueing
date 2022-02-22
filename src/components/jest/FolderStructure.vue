<template>
    <div class="container">
        <CodeBlock
            type="code"
            title="Folder structure"
            content="
             It's doesn't affect the code itself, BUT all of your tests must be in a folders named tests/unit on the root level.
            I personally structure the folders inside unit folder like modules in the state.             
            "
            codeblock="tests/unit root level
tests/unit/reusableComponents <- folder name
    codeBlock <- sub folder
        functions <- sub sub folder
        state <- sub sub folder

    navbar <- sub folder
        functions <- sub sub folder
        state <- sub sub folder
        etc..."
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