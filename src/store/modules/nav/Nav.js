export default {
    state: {
        isSidebarOpen: true,
        routes: ['Home', 'Installation', 'Components', 'Props', 'Lifecycle',
            'Watchers', 'Routes', 'State', 'Mixins', 'Filters', 'Directives',
            'Fetch data', 'Forms', 'Plugins'
        ]
    },
    mutations: {
        SET_IS_SIDE_BAR_OPEN(state) {
            state.isSidebarOpen = !state.isSidebarOpen;
        }
    },
    actions: {},
    getters: {
        IS_SIDE_BAR_OPEN(state) {
            return state.isSidebarOpen;
        },

        GET_ALL_ROUTES(state) {
            return state.routes;
        }
    }
}