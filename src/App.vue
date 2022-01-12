<template>
  <div id="app" :class="IS_SIDE_BAR_OPEN ? 'no-scroll' : ''">
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
  data() {
    return {
      width: false,
    };
  },

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

  watch: {
    $route() {
      this.width ? this.SET_IS_SIDE_BAR_OPEN() : "";
    },
  },

  created() {
    if (window.innerWidth <= 768) {
      this.width = true;
    }
  },
};
</script>

<style>
</style>
