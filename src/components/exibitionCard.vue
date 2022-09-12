<template>
  <div class="exibition-wrap">
    <div class="img-wrap">
      <img src="" alt="">
    </div>
    <div class="info-wrap">
      <div class="title-wrap">
        Hello?
      </div>
      <div class="desc-wrap">
        This is a description kekw
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
.exibition-wrap {
  height: 200px;
  width: 600px;
  display: flex;
  flex-direction: column;

  .img-wrap {
    height: 125px;
    width: 100%;
    background-color: red;
    border-radius: 10px 10px 0 0;
  }

  .info-wrap {
    height: 75px;
    width: 100%;
    padding: 0;
    background-color: blue;
    border-radius: 0 0 10px 10px;
  }
}
</style>