<template>
  <div id="example">
    <Example
      leftTitle="First option"
      :leftImg="defaultImg"
      rightTitle="Second option"
      :rightImg="modulesImg"
    />
  </div>
</template>

<script>
import defaultImg from "../../assets/routes/first-option.png";
import modulesImg from "../../assets/routes/second-option.png";
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

