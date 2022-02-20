module.exports = {
    preset: '@vue/cli-plugin-unit-jest',


    transform: {
        // process `*.vue` files with `vue-jest`
        ".*\\.(vue)$": "vue-jest"
    }
}