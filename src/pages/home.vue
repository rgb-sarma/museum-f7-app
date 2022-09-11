<template>
  <f7-page name="home">
    <!-- Top Navbar -->
    <f7-navbar>
      <f7-nav-left>
        <f7-link icon-ios="f7:menu" icon-aurora="f7:menu" icon-md="material:menu" panel-open="left"></f7-link>
      </f7-nav-left>
      <f7-nav-title sliding>Museum App</f7-nav-title>
      <!-- <f7-nav-title-large>Museum App</f7-nav-title-large> -->
    </f7-navbar>
    <!-- Toolbar-->
    <f7-toolbar bottom>
      <f7-link>Left Link</f7-link>
      <f7-link>Right Link</f7-link>
    </f7-toolbar>
    <!-- Page content-->
    <f7-block strong>
      <p>Here is your blank Framework7 app. Let's see what we have here.</p>
    </f7-block>
    <f7-block >
      <div class="item-wrap" @click="f7router.navigate('/about/')">
        <div class="img-wrap">
          <img src="../assets/images/test.jpg" alt="">
        </div>
        <div class="info-wrap">
          <span>HEllo</span>
        </div>
      </div>
    </f7-block>
    <f7-block-title>Navigation</f7-block-title>
    <f7-list>
      <f7-list-item link="/about/" title="About"></f7-list-item>
      <f7-list-item link="/form/" title="Form"></f7-list-item>
    </f7-list>


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

  .img-wrap {
    width: 100%;
    height: 200px;
    // background: url(https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg);
    // background-size: cover;
    // background-position: center;
    border-radius: 10px 10px 0 0;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 10px 10px 0 0;
    }
  }

  .info-wrap {
    height: 80px;
    padding: 10px;
    background-color: #fff;
    border-radius: 0 0 10px 10px;
  }
}
</style>