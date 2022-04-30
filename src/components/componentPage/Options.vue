<template>
    <div>
        <div class="container">
            <CodeBlock
                type="code"
                title="Components options"
                codeblock="<template>
    <div>
    <!-- some html -->
    </div>
</template>

<script>
    import { mapActions, mapGetters, mapMutations } from 'vuex';
    export default {
    props: [],

    data() {
      return {};
    },

    methods: {},
    computed: {},
    watch: {},
    components: {},

    //lifecycles
    beforeCreate() {},
    created() {},
    beforeMount() {},
    mounted() {},
    beforeUpdate() {},
    updated() {},
    beforeDestroy() {},
    };
</script>"
            />
        </div>
    </div>
</template>

<script>
export default {
    components: {
        CodeBlock: () =>
            import(
                /* webpackChunkName: "CodeBlock" */ "../globalComponents/codeBlock/CodeBlock.vue"
            ),
    },
};
</script>

<style>
</style>