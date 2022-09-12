<template>
  <f7-page name="exibition">
    <Navbar />

    <f7-list>
      <f7-list-item v-for="n in 5" link="/exibit/1">
        Hallo
      </f7-list-item>
    </f7-list>
  </f7-page>
</template>

<script setup>
import Navbar from '../components/navbar.vue';

</script>

<style scoped lang="scss">

</style>