<template>
  <div id="example">
    <Example
      leftTitle="Default"
      :leftImg="defaultImg"
      rightTitle="Modules"
      :rightImg="modulesImg"
    />
  </div>
</template>

<script>
import defaultImg from "../../assets/state-normal.png";
import modulesImg from "../../assets/state-modules.png";
export default {
  data() {
    return {
      defaultImg,
      modulesImg,
    };
  },
  components: {
    Example: () =>
      import(
        /* webpackChunkName: "Example" */ "../globalComponents/example/Example.vue"
      ),
  },
};
</script>

