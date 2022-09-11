<template>
  <f7-page name="home">
    <!-- Top Navbar -->
    <f7-navbar>
      <f7-nav-title sliding>Museum App</f7-nav-title>
      <f7-nav-right>
        <f7-link icon-ios="f7:menu" icon-aurora="f7:menu" icon-md="material:menu" panel-open="right"></f7-link>
      </f7-nav-right>
    </f7-navbar>




  </f7-page>
</template>

<script>
  import {  } from 'vue'
  export default {
    props: {
      f7route: Object,
      f7router: Object,
    },
    setup(p) {
      // console.log(p.f7route);
      // console.log(p.f7router);

      
      return {
      }
    }
  }
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