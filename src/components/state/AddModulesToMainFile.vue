<template>
    <div>
        <div class="container">
            <CodeBlock
                type="code"
                title="Import module to main store file"
                codeblock="
file - src\store\store.js (or index.js)

import Vue from 'vue'
import Vuex from 'vuex'

<!-- importing the modules files -->

import Nav from './modules/nav/Nav'
import PluginsList from './modules/pluginList/PluginsList'
import InstallationList from './modules/installationList/InstallationList'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},

  <!-- adding to modules -->
  
  modules: {
    Nav,
    PluginsList,
    InstallationList
  }
})
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

<style>
</style>