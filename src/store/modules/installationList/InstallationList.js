export default {
    state: {
        installation: [{
                title: "Vue",
                installation: "https://cli.vuejs.org/guide/installation.html",
                npm: "npm install -g @vue/cli",
                use: "vue create hello-world"
            },
            {
                title: "Nuxt",
                installation: "https://nuxtjs.org/docs/get-started/installation",
                use: "npx create-nuxt-app hello-world"
            },

        ]
    },
    mutations: {

    },
    actions: {},
    getters: {
        GET_ALL_INSTALLATION(state) {
            return state.installation;
        }
    }
}