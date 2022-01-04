<template>
  <div id="example">
    <Example
      leftTitle="Normal"
      :leftImg="defaultImg"
      rightTitle="With props & dynamic class"
      :rightImg="modulesImg"
    />
  </div>
</template>

<script>
import defaultImg from "../../assets/components/normal-global.png";
import modulesImg from "../../assets/components/props-global.png";
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

