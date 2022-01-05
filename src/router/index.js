import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: () =>
            import ( /* webpackChunkName: "Home" */ '../views/Home.vue')
    },
    {
        path: '/installation',
        name: 'Installation',
        component: () =>
            import ( /* webpackChunkName: "installation" */ '../views/Installation.vue')
    },
    {
        path: '/plugins',
        name: 'Plugins',
        component: () =>
            import ( /* webpackChunkName: "Plugins" */ '../views/Plugins.vue')
    },
    {
        path: '/state',
        name: 'State',
        component: () =>
            import ( /* webpackChunkName: "State" */ '../views/State.vue')
    },
    {
        path: '/routes',
        name: 'Routes',
        component: () =>
            import ( /* webpackChunkName: "Routes" */ '../views/Routes.vue')
    },
    {
        path: '/components',
        name: 'Components',
        component: () =>
            import ( /* webpackChunkName: "Routes" */ '../views/Components.vue')
    },
    {
        path: '/props',
        name: 'Props',
        component: () =>
            import ( /* webpackChunkName: "Props" */ '../views/Props.vue')
    },
    {
        path: '/lifecycle',
        name: 'Lifecycle',
        component: () =>
            import ( /* webpackChunkName: "Lifecycle" */ '../views/Lifecycle.vue')
    },

    {
        path: "/:catchAll(.*)*",
        redirect: {
            name: 'Home'
        }
    }
]



const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior: (to, from, savedPosition) => {
        if (savedPosition) {
            return savedPosition;
        } else if (to.hash) {
            return {
                selector: to.hash
            };
        } else {
            return {
                x: 0,
                y: 0
            };
        }
    }
})




export default router