<template>
  <div class="install-header">
    <div class="container">
      <PageHeader title="Useful plugins for vue" />
      <div v-for="(item, index) in GET_ALL_PLUGINS" :key="index">
        <CodeBlock
          type="normal"
          :title="item.title"
          :installation="item.installation"
          :npm="item.npm"
        ></CodeBlock>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: ["header"],

  computed: {
    ...mapGetters(["GET_ALL_PLUGINS"]),
  },

  components: {
    PageHeader: () =>
      import(
        /* webpackChunkName: "PageHeader" */ "../globalComponents/pageHeader/PageHeader.vue"
      ),
    CodeBlock: () =>
      import(
        /* webpackChunkName: "CodeBlock" */ "../globalComponents/codeBlock/CodeBlock.vue"
      ),
  },
};
</script>

<style scoped></style>
