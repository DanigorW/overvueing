<template>
    <div class="container">
        <CodeBlock
            type="code"
            title="Folder Structure"
            codeblock="//directive folder and file
src/components/directives/click-ouside.js

//directives global folder and installation
src/plugins/globalDirectives.js

import Vue from 'vue';
import clickOutside from '../directives/click-ouside.js';
const GlobalDirectives = {
  install (Vue) {
    Vue.directive('click-outside', clickOutside);
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