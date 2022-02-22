<template>
    <div class="container">
        <CodeBlock
            type="code"
            title="Closures"
            content="
            A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.
            Let's make it even easier to understand - think of a parent function (makeFunc) - we declare a `name` variable inside of it.
            Next, we declare a new `alertName` function (also inside the parent `makeFunc` function), which alerts the `name` variable we declared.  
            And then we return the `alertName` function. If we assign the result of calling `makeFunc` to a variable and then call it - the name we declared in the parent function (makeFunc) will be alerted. The tricky thing is to understand why it works this way.
            In simple words - you get the access to the parent function's scope, even though it has all ready finished executing and not present on the call stack anymore - and yet you have access to all the data. 
           "
            codeblock="function makeFunc() {
  const name = 'Mozilla';
  function alertName() {
    alert(name);
  }
  return alertName;
}

const myFunc = makeFunc();
myFunc();"
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