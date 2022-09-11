<template>
  <!-- Top Navbar -->
  <f7-navbar :back-link="hasBack">

    <f7-nav-title link="/" sliding>Museum App</f7-nav-title>

    <f7-nav-right>
      <f7-link icon-ios="f7:menu" icon-aurora="f7:menu" icon-md="material:menu" panel-open="right"></f7-link>
    </f7-nav-right>
    
  </f7-navbar>
</template>

<script setup>
  import { ref, defineProps } from 'vue';

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