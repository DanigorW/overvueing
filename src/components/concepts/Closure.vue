<template>
    <div class="container">
        <CodeBlock
            type="code"
            title="Closures"
            content="
            A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.
            Let's make it even more easy to understand, think of a parent function (makeFunc) that we declare a name variable in it.
            Next we declare a new 'alertName' function inside the parent function that alert the name variable from the parent function  
             (makeFunc), then we return the alertName function. If we call the function obviously it will alert the name from the parent function (makeFunc) the tricky part is to know way.
            In simple words you get access to the parent function scope even through it's all ready run and not present on the call stack and yet you have access to all the data. 
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