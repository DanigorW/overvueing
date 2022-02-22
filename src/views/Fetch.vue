<template>
    <div class="padding20">
        <Header />
        <Classic />
        <Async />
        <Post />
        <Axios />
        <FetchWithVue />
        <PromiseAll />
    </div>
</template>

<script>
export default {
    metaInfo: {
        meta: [
            {
                name: "description",
                content:
                    "The Fetch API provides an interface for fetching resources (including across the network). It will seem familiar to anyone who has used XMLHttpRequest, but the new API provides a more powerful and flexible feature set.",
            },
        ],
    },
    components: {
        Header: () =>
            import(
                /* webpackChunkName: "Header" */ "../components/fetch/Header.vue"
            ),
        Classic: () =>
            import(
                /* webpackChunkName: "Classic" */ "../components/fetch/Classic.vue"
            ),
        Async: () =>
            import(
                /* webpackChunkName: "Async" */ "../components/fetch/Async.vue"
            ),
        Post: () =>
            import(
                /* webpackChunkName: "Post" */ "../components/fetch/Post.vue"
            ),
        FetchWithVue: () =>
            import(
                /* webpackChunkName: "FetchWithVue" */ "../components/fetch/FetchWithVue.vue"
            ),
        PromiseAll: () =>
            import(
                /* webpackChunkName: "PromiseAll" */ "../components/fetch/PromiseAll.vue"
            ),
        Axios: () =>
            import(
                /* webpackChunkName: "Axios" */ "../components/fetch/Axios.vue"
            ),
    },
};
</script>

<style>
</style>