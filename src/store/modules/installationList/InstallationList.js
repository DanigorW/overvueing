export default {
    state: {
        installation: [{
                title: "Vue",
                installation: "https://cli.vuejs.org/guide/installation.html",
                npm: "npm install -g @vue/cli",
                use: "vue create hello-world"
            },
            {
                title: "Nuxt (for server side rendering and seo )",
                installation: "https://nuxtjs.org/docs/get-started/installation",
                use: "npx create-nuxt-app hello-world"
            },
            {
                title: "Vuetify",
                installation: "https://vuetifyjs.com/en/getting-started/installation/#vue-cli-install",
                use: "vue add vuetify (on existing project )"
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