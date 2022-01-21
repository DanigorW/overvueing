<template>
    <div class="container">
        <CodeBlock
            type="code"
            title="Folder Structure"
            codeblock="
//directive file
src/components/directives/click-ouside.js

//directives folder
src/plugins/globalDirectives.js

import Vue from 'vue';
import clickOutside from '../directives/click-ouside.js';
Vue.use(clickOutside)

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