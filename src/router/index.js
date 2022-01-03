import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: () => import( /* webpackChunkName: "Home" */ '../views/Home.vue')
  },
  {
    path: '/installation',
    name: 'Installation',
    component: () => import( /* webpackChunkName: "installation" */ '../views/Installation.vue')
  },
  {
    path: '/plugins',
    name: 'Plugins',
    component: () => import( /* webpackChunkName: "Plugins" */ '../views/Plugins.vue')
  },
  {
    path: '/state',
    name: 'State',
    component: () => import( /* webpackChunkName: "State" */ '../views/State.vue')
  },
  {
    path: '/routes',
    name: 'Routes',
    component: () => import( /* webpackChunkName: "Routes" */ '../views/Routes.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router