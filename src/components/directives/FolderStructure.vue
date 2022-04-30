<template>
    <div class="container">
        <CodeBlock
            type="code"
            title="Folder Structure"
            codeblock="//directive folder and file
src/directives/clickOuside.js

import Vue from 'vue';
import clickOutside from '../directives/clickOuside.js';
const GlobalDirectives = {
  install (Vue) {
    Vue.directive('clickOutside', clickOutside);
  }
}

export default GlobalDirectives"
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