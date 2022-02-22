<template>
    <div class="container">
        <CodeBlock
            type="code"
            title="Recursion"
            content="Recursion can be tough to understand especially for new programmers. In simple words, a recursive function is one that calls itself until the condition needed found. Think of matryoshka doll you can have a doll with 10-20 small dolls insite of it.
            Each time you call your function the function opens a new doll until you get the last one.
            The most important part of a recursion is the base case — the condition, when met, stops the function from calling itself. Without a base case, a recursive function keeps going in an infinite loop.
            "
            codeblock="const countMatryoshka = (n) => {
    if (n === 1)
        return 1;
    else
        return 1 + countMatryoshka(n - 1);
}
//most common interview question, fibonacci sequence
//in the next section (Memoization) there is an explanation with more advanced example
const fibonacci = (n) => {
    if (n <= 2) {
        return 1
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
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