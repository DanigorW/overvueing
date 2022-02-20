<template>
    <div class="container">
        <CodeBlock
            type="code"
            title="Global replace"
            content="In js we have 'normal' replace, but the default behavior of replace is to replace only the first match it findes.
            With regex we can replace all the matching chracters.
            "
            codeblock="const name = 'some_user_name'   
const formatedName = name.replace(/_/g, ' ') // some user name

let RemoveUnderscores = (value) => {
   return value.replace(/_/g, ' ')
}"
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