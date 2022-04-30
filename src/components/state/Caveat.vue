<template>
    <div>
        <div class="container">
            <CodeBlock
                type="code"
                title="Caveat about mutations & actions"
                content="
        The right way to update the state is ONLY with mutations,
        we already established that mutations run synchronous code and actions run asynchronous code
        so it means that if we have simple counter and we want to increment it we will write a mutations
        for that - technically we can write a action that can commit the mutations even if the code is synchronous,
        a lot of developers do that - every mutation eventially gets commited by an action.
        How you should write mutations? Personal use? - Do whatever you want... Developer in team?
        Decide together.
      "
            />
        </div>
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