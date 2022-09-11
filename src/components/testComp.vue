<template>
  <div class="wrapper">
    <div class="top"></div>
    <div class="bot"></div>
  </div>
</template>

<style scoped lang="scss">
  .wrapper {
    width: 200px;
    height: 100px;
    display: flex;
    flex-direction: column;

    .top {
      width: 100%;
      height: 50px;
      background-color: red;
      border-radius: 10px 10px 0 0;
    }

    .bot {
      width: 100%;
      height: 50px;
      background-color: blue;
      border-radius: 0 0 10px 10px;
    }
  }
</style>