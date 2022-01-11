<template>
  <div class="padding20">
    <Header />
    <Classic />
    <Async />
    <Post />
    <FetchWithVue />
    <PromiseAll />
  </div>
</template>

<script>
export default {
  components: {
    Header: () =>
      import(/* webpackChunkName: "Header" */ "../components/fetch/Header.vue"),
    Classic: () =>
      import(
        /* webpackChunkName: "Classic" */ "../components/fetch/Classic.vue"
      ),
    Async: () =>
      import(/* webpackChunkName: "Async" */ "../components/fetch/Async.vue"),
    Post: () =>
      import(/* webpackChunkName: "Post" */ "../components/fetch/Post.vue"),
    FetchWithVue: () =>
      import(
        /* webpackChunkName: "FetchWithVue" */ "../components/fetch/FetchWithVue.vue"
      ),
    PromiseAll: () =>
      import(
        /* webpackChunkName: "PromiseAll" */ "../components/fetch/PromiseAll.vue"
      ),
  },
};
</script>

<style>
</style>