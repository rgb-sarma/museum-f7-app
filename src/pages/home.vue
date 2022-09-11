<template>
  <f7-page name="home">
    <navbar />




  </f7-page>
</template>

<script setup>
  import navbar from '@/components/navbar.vue';
    // props: {
    //   f7route: Object,
    //   f7router: Object,
    // },
      // console.log(p.f7route);
      // console.log(p.f7router);

      
</script>

<style scoped lang="scss">
.item-wrap {
  display: flex;
  flex-direction: column;
  border-radius: 10px;

  .info-wrap {
    height: 80px;
    padding: 10px;
    background-color: #fff;
    border-radius: 0 0 10px 10px;
  }
}
</style>