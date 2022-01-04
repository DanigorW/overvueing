<template>
  <div>
    <div class="container">
      <CodeBlock
        type="code"
        contentTitle="Default"
        title="Navigation links"
        content="Navigate between pages with <router-link>, we will use the :to option to bind the route to any name from our router file,
            in must apps you will need to get user url query params and share them between routes (pages) - so we will add the option as well,
            think about your navigate for a sec, lest say you have 10 different routes in your app - what you will do? one option is to create 10 different router-link and it will be ok BUT what if tomorrow for some reason you need to have 30 routes? you see where i'm going with that? the better way is to create navigate modules in you state and use mapGetters to get all the routes and loop through team and create the HTML stretcher only onc.  
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