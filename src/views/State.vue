<template>
  <div class="padding20">
    <Header />
    <Example />
    <ModulesCode />
    <NameConvention />
    <Asynchronous />
    <UseState />
    <Caveat />
  </div>
</template>

<script>
export default {
  components: {
    Header: () =>
      import(/* webpackChunkName: "Header" */ "../components/state/Header.vue"),

    Example: () =>
      import(
        /* webpackChunkName: "Example" */ "../components/state/Example.vue"
      ),

    ModulesCode: () =>
      import(
        /* webpackChunkName: "ModulesCode" */ "../components/state/ModulesCode.vue"
      ),
    NameConvention: () =>
      import(
        /* webpackChunkName: "NameConvention" */ "../components/state/NameConvention.vue"
      ),
    Asynchronous: () =>
      import(
        /* webpackChunkName: "Asynchronous" */ "../components/state/Asynchronous.vue"
      ),
    UseState: () =>
      import(
        /* webpackChunkName: "UseState" */ "../components/state/UseState.vue"
      ),
    Caveat: () =>
      import(/* webpackChunkName: "Caveat" */ "../components/state/Caveat.vue"),
  },
};
</script>

<style>
</style>