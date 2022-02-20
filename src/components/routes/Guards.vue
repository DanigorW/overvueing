<template>
    <div>
        <div class="container">
            <CodeBlock
                type="code"
                title="Navigation guards"
                content="
        As the name suggests, the navigation guards provided by vue-router are primarily used to guard navigations either by redirecting it or canceling it. There are a number of ways to hook into the route navigation process: globally, per-route, or in-component.
        "
                codeblock="//global route guard
router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !isAuthenticated) next({
    name: 'Login'
  })
  else next()
})
//global after hooks
router.afterEach((to) => {
  if (to.name == 'Home') {
    console.log(123);
  }
})
//per-route guard
{
path: '/',
name: 'Home',
component: () => import( /* webpackChunkName: 'Home' */ '../views/Home.vue')
beforeEnter: (to, from, next) => {
    //some logic...
}
},"
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