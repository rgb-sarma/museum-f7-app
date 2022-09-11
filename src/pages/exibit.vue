<template>
    <f7-page>
      <navbar />

      <f7-block>
        test xd
      </f7-block>
    </f7-page>
</template>

<script setup>
  import { f7 } from 'framework7-vue';
  import navbar from '@/components/navbar.vue';

  const props = defineProps({
    f7route: Object
  });
  let ext_id = props.f7route.params.id



</script>

<style>

</style>