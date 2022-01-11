<template>
  <div id="app">
    <Nav />
    <Sidebar />
    <router-view
      :class="IS_SIDE_BAR_OPEN ? 'width87' : 'width100'"
      class="layout-container"
    />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  computed: {
    ...mapGetters(["IS_SIDE_BAR_OPEN"]),
  },

  methods: {
    ...mapMutations(["SET_IS_SIDE_BAR_OPEN"]),
  },

  components: {
    Nav: () =>
      import(
        /* webpackChunkName: "Nav" */ "./components/globalComponents/nav/Nav.vue"
      ),
    Sidebar: () =>
      import(
        /* webpackChunkName: "Sidebar" */ "./components/globalComponents/sidebar/Sidebar.vue"
      ),
  },

  created() {
    if (window.innerWidth <= 768) {
      this.SET_IS_SIDE_BAR_OPEN();
    }
  },
};
</script>

<style lang="scss">
</style>
