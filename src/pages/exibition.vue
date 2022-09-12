<template>
  <f7-page name="exibition">
    <Navbar />
    <div class="title-wrap">
      <f7-block>
        <h2>Edo period of Japan</h2>
      </f7-block>
      <hr>
      <div class="subtitle">
        <span>Time to tour: 30m</span>
        <span>Price: 150$</span>
      </div>
    </div>
    <f7-list media-list accordion>
      <f7-list-item v-for="n in 5" link="/exibit/1" title="Hello" :text="`Time to view ${n*15} min`" subtitle="No" no-chevron>
        <template #media>
          <img :src="`https://picsum.photos/id/2${n}/60/60`" width="60">
        </template>
      </f7-list-item>
    </f7-list>
  </f7-page>
</template>

<script setup>
import Navbar from '../components/navbar.vue';

</script>

<style scoped lang="scss">
.title-wrap {
  // padding-top: 20px;
  width: 100%;
  height: 100px;
  // background-color: red;

  h2 {
    margin: 0;
    padding: 0;
  }

  .subtitle {
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
  }
}
</style>