<template>
  <div class="padding20">
    <Header />
    <BeforeCreate />
    <Created />
    <BeforeMount />
    <Mounted />
    <BeforeUpdate />
    <Updated />
  </div>
</template>

<script>
export default {
  components: {
    Header: () =>
      import(
        /* webpackChunkName: "Header" */ "../components/lifecycle/Header.vue"
      ),
    BeforeCreate: () =>
      import(
        /* webpackChunkName: "BeforeCreate" */ "../components/lifecycle/BeforeCreate.vue"
      ),
    Created: () =>
      import(
        /* webpackChunkName: "BeforeCreate" */ "../components/lifecycle/Created.vue"
      ),
    BeforeMount: () =>
      import(
        /* webpackChunkName: "BeforeMount" */ "../components/lifecycle/BeforeMount.vue"
      ),
    Mounted: () =>
      import(
        /* webpackChunkName: "Mounted" */ "../components/lifecycle/Mounted.vue"
      ),
    BeforeUpdate: () =>
      import(
        /* webpackChunkName: "BeforeUpdate" */ "../components/lifecycle/BeforeUpdate.vue"
      ),
    Updated: () =>
      import(
        /* webpackChunkName: "Updated" */ "../components/lifecycle/Updated.vue"
      ),
  },
};
</script>

<style>
</style>