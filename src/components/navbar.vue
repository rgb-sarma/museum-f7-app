<template>
  <!-- Top Navbar -->
  <f7-navbar :back-link="hasBack">

    <f7-nav-title sliding><a href="/">Museum App</a></f7-nav-title>

    <f7-nav-right>
      <f7-link v-if="false" icon-ios="f7:person_filled" icon-aurora="f7:person_filled" icon-md="material:person" href="/login"></f7-link>
      <f7-link v-else icon-ios="f7:person_filled" icon-aurora="f7:person_filled" icon-md="material:person" panel-open="right"></f7-link>
    </f7-nav-right>
    
  </f7-navbar>
</template>

<script setup>
  import { ref, watch } from 'vue';
  import { f7 } from 'framework7-vue';

  let sid = f7.store.state.loggedIn

  const props = defineProps({
    disableBack: {
      type: Boolean,
      default: false
    }
  });

  let hasBack = ref(!props.disableBack)

</script>

<style>

</style>