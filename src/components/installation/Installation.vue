<template>
    <div class="install-header">
        <div class="container">
            <PageHeader
                title="How to install "
                dependency="*You need NODE installed"
            />
            <div v-for="(item, index) in GET_ALL_INSTALLATION" :key="index">
                <CodeBlock
                    type="normal"
                    :title="item.title"
                    :installation="item.installation"
                    :npm="item.npm"
                    :use="item.use"
                />
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    props: ["header"],

    computed: {
        ...mapGetters(["GET_ALL_INSTALLATION"]),
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

<style scoped>
/* .block-code-header {
  color: #fff;
} */
</style>