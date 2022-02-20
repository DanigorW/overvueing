<template>
    <div class="container">
        <CodeBlock
            type="code"
            title="Check if there's number in a string"
            content="Very common test, think of name input, you want the user to type only alphabet characters.
            If user added accidentally (or not) number you can immediately show error."
            codeblock="
const hasNumbers = (value) => {
  let regex = /\d/g;
  return regex.test(value); // true/false
}
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