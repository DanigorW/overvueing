<template>
  <div id="app">
    <Nav />
    <Sidebar />
    
    <router-view :class="IS_SIDE_BAR_OPEN ? 'width87':'width100'" class="layout-container "/>
  </div>
</template>

<script>
import {mapGetters} from "vuex"
export default {
 
    computed:{
    ...mapGetters(['IS_SIDE_BAR_OPEN'])
  },

  components:{
    Nav: () =>
      import(
        /* webpackChunkName: "Nav" */ "./components/globalComponents/nav/Nav.vue"
      ),
    Sidebar: () =>
      import(
        /* webpackChunkName: "Sidebar" */ "./components/globalComponents/sidebar/Sidebar.vue"
      ),
  }
}
</script>

<style lang="scss">

</style>
