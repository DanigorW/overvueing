<template>
  <div>
    <div class="container">
      <CodeBlock
        type="code"
        contentTitle="Default"
        title="Navigation links"
        content="In order to navigate between pages with <router-link>, we will use the :to option to bind the route to any name from our router file,
            in most apps you will need to get user url query params and share them between routes (pages) - so we will add this option as well,
            think about your navigation for a sec, lets say you have 10 different routes in your app - what you will do? One option is to create 10 different router-links and it will be ok BUT what if tomorrow for some reason you need to have 30 routes? You see where I'm going with that? The better way is to create the navigation modules in you state and use mapGetters to get all the routes, loop through them and create the HTML structure only once.  
         "
        codeblock="
<template>
  <!-- ok ish X10 -->
  <router-link :to='{ name: 'nameFromRouterFile', query: $route.query }'></router-link>

  <!-- better way X1 -->
  <div class='router-links' v-for='(route, index) in GET_ALL_ROUTES' :key='index'>
        <router-link :to='{ name: $route.name, query: $route.query }'>{{}}</router-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {

  computed: {
    ...mapGetters(['IS_SIDE_BAR_OPEN', 'GET_ALL_ROUTES']),
  },
};
</script>
"
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