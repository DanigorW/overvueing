<template>
    <div class="container">
        <CodeBlock type="code" title="Custome drawer" content="" />
        <div class="show-code-container">
            <span class="show-code" @click="showCode = !showCode">{{
                showCode ? "close" : "Show code"
            }}</span>
        </div>
        <transition name="fade">
            <div v-if="showCode">
                <CodeBlock type="code" title="Custome checkbox code" />
            </div>
        </transition>
        <CodeBlock
            v-if="showCode"
            type="code"
            title="How to use - textarea"
            content=""
        />
    </div>
</template>

<script>
export default {
    data() {
        return {
            showCode: false,
        };
    },
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