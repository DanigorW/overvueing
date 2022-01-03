export default {
    state: {
        plugins: [{
                title: "Is element in viewport",
                installation: "https://www.npmjs.com/package/vue-observe-visibility",
                npm: "npm install --save vue-observe-visibility"
            },
            {
                title: "Click away to close any element",
                installation: "https://www.npmjs.com/package/vue-clickaway",
                npm: "npm install vue-clickaway --save"
            },
            {
                title: "Multi select",
                installation: "https://vue-multiselect.js.org/#sub-getting-started",
                npm: "npm install vue-multiselect --save"
            },
            {
                title: "Vueper sliders",
                installation: "https://antoniandre.github.io/vueper-slides",
                npm: "npm i vueperslides"
            },
            {
                title: "AOS animations",
                installation: "https://www.npmjs.com/package/vue-aos",
                npm: "npm install vue-aos --save"
            },
            {
                title: "I18n multi language website",
                installation: "https://kazupon.github.io/vue-i18n",
                npm: "npm install vue-i18n"
            },
            {
                title: "Webpack bundle analyzer",
                installation: "https://www.npmjs.com/package/vue-cli-plugin-webpack-bundle-analyzer",
                npm: "vue add webpack-bundle-analyzer"
            },
            {
                title: "Smooth scroll",
                installation: "https://www.npmjs.com/package/vue-smooth-scroll",
                npm: "npm install --save vue-smooth-scroll"
            },
            {
                title: "Number animation",
                installation: "https://www.npmjs.com/package/vue-number-animation",
                npm: "npm install vue-number-animation --save"
            },
            {
                title: "Social sharing",
                installation: "https://www.npmjs.com/package/vue-social-sharing",
                npm: "npm install vue-social-sharing --save"
            },
            {
                title: "Complex parallax",
                installation: "https://github.com/Aminerman/vue-kinesis",
                npm: "npm install vue-kinesis --save"
            },
        ]
    },
    mutations: {

    },
    actions: {},
    getters: {
        GET_ALL_PLUGINS(state) {
            return state.plugins;
        }
    }
}