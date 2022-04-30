export default {
    state: {
        isSidebarOpen: true,
        routes: ['Home', 'Installation', 'Props', 'Components', 'Lifecycle', 'Computed',
            'Watchers', 'Routes', 'State', 'Mixins', 'Filters', 'Directives',
            'Fetch', 'Forms', 'Refs', 'Transition', 'Jest', 'Firebase', 'Regex', 'Concepts', 'Plugins'
        ],
    },
    mutations: {
        SET_IS_SIDE_BAR_OPEN(state) {
            state.isSidebarOpen = !state.isSidebarOpen;
        },

    },
    actions: {

    },
    getters: {
        IS_SIDE_BAR_OPEN(state) {
            return state.isSidebarOpen;
        },

        GET_ALL_ROUTES(state) {
            return state.routes;
        },
    }
}