<template>
  <f7-panel right cover>
    <f7-page>
      <f7-list>
        <!-- <f7-list-item title="back" link back panel-close/> -->
        <f7-list-item v-if="!sid" title="Login" link='/login' panel-close/>
        <!-- <f7-list-item v-if="!sid" title="Register" link='/register' panel-close/> -->
        <f7-list-item v-if="sid" title="Profile" link='/profile/' panel-close/>
        <f7-list-item v-if="sid" title="exibit test" link='/exibit/3' panel-close/>
      </f7-list>
    </f7-page>
  </f7-panel>
</template>

<script setup>
  import { f7 } from 'framework7-vue';
  let sid = f7.store.state.loggedIn
</script>

<style>

</style>