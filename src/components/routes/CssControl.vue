<template>
    <div>
        <div class="container">
            <CodeBlock
                type="code"
                title="Control class & style"
                content="
        By having access to the $route from any component we can control the class and style options of any component,
        for example - you have navigation bar and you need to change the background color in the dashboard page, you can to that very easily, 
        additionally the $route has active class (.router-link-exact-active) that we can control, we can change the color or add any css style we want to it - for example in 'overvuing' the active links are colored in green.
        "
                codeblock="<div :class='$route.path === '/routes' ? 'bg-red' : ''></div>
<div :style='$route.path === '/routes' ? 'background:red' : ''></div>

.bg-red {
  background:red;
}

.router-link-exact-active {
  color: #41b883;
  font-weight: bold;
}"
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
.bg-red {
    background: red;
}
</style>