<template>
  <f7-panel right cover>
    <f7-page>
      <f7-list>
        <!-- <f7-list-item title="back" link back panel-close/> -->
        <f7-list-item title="Login" link='/login' panel-close/>
        <f7-list-item title="Register" link='/register' panel-close/>
        <f7-list-item title="Profile" link='/profile/'/>
      </f7-list>
    </f7-page>
  </f7-panel>
</template>

<script setup>
  import api from '@/api';
  import {f7} from 'framework7-vue';


  let user = f7.store.getters.user;
  console.log(user.value);
</script>

<style>

</style>