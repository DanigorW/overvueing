<template>
    <div>
        <div class="container">
            <CodeBlock
                type="code"
                title="PRO TIP"
                content="
       Before starting any project stop for a sec and think about your components structure.
         Which reusable components you need? Buttons? Forms? Popups? - what components will be in every route you have? Navbar? Footer? etc... you get the point. This step can save you A LOT OF TIME IN THE FUTURE.
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

<style scoped>
</style>