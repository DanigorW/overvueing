<template>
  <div id="block-code">
    <div v-if="type == 'normal'">
      <p v-if="title">{{ title }}</p>
      <p v-if="installation">{{ installation }}</p>
      <p v-if="npm">{{ npm }}</p>
      <p v-if="use">{{ use }}</p>
    </div>

    <div v-if="type == 'code'">
      <p v-if="title">{{ title }}</p>
      <p class="content">{{ content }}</p>
      <pre v-if="codeblock">
<code>
{{codeblock}}
</code>
</pre>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "type",
    "codeblock",
    "title",
    "installation",
    "npm",
    "use",
    "content",
    "img",
  ],
};
</script>

<style scoped>
#block-code {
  margin: 20px 0px;
  background: #32475b;
  border-radius: 8px;
  padding: 20px;
  transition: all 0.3s;
}

#block-code:hover {
  /* transform: scale(1.01); */
  /* background: #263849; */
  /* background: #41b883; */
}

#block-code p {
  font-size: 16px;
  color: #fff;
  margin: 10px 0;
}
#block-code p:nth-child(1) {
  font-size: 24px;
  color: #41b883;
}

.content {
  max-width: 1000px;
  width: 100%;
  line-height: 24px;
}

.content-title {
  font-size: 24px !important;
}

pre,
code {
  color: #fff;
  white-space: pre;
  font-size: 16px;
  background: #263849;
  border-radius: 8px;
  padding-left: 10px;
}
</style>