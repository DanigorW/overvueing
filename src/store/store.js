import Vue from 'vue'
import Vuex from 'vuex'
import Nav from './modules/nav/Nav'
import PluginsList from './modules/pluginList/PluginsList'
import InstallationList from './modules/installationList/InstallationList'
import Firebase from './modules/firebase/Firebase'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        Nav,
        PluginsList,
        InstallationList,
        Firebase
    }
})