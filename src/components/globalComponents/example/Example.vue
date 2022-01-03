<template>
  <div id="example">
    <div class="container">
      <div class="img-container">
        <div class="left-side">
          <div class="header">
            <h3>{{ leftTitle }}</h3>
            <img :src="leftImg" alt="" />
          </div>
        </div>
        <div class="right-side">
          <h3>{{ rightTitle }}</h3>
          <img :src="rightImg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["leftTitle", "leftImg", "rightTitle", "rightImg"],
};
</script>

<style scoped>
#example {
  margin-top: 20px;
  margin-bottom: 40px;
}

.header h3,
.right-side h3 {
  font-size: 24px;
  margin-bottom: 10px;
}

.img-container {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.img-container img {
  max-width: 633px;
  width: 100%;
  height: 500px;
}
</style>