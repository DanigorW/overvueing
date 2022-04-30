<template>
    <div class="container">
        <CodeBlock
            type="code"
            title="Nuxt"
            codeblock="//directive folder and file
src/plugins/directives/click-ouside.js

//directives global folder and installation
plugins/globalDirectives.js

import Vue from 'vue';
import clickOutside from './directives/clickOuside.js';
Vue.directive('clickOutside', clickOutside);       "
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