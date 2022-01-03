<template>
  <div id="page-header">
      <h1>{{title}}</h1>
      <h5 v-if="dependency">{{dependency}} </h5>
  </div>
</template>

<script>
export default {
    props:["title","dependency"]
}
</script>

<style scoped>
  #page-header h1 {
    margin-bottom: 10px;
  }
</style>