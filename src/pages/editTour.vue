<template>
  <f7-page name="editTour">
    <navbar />
    <f7-block>
      <f7-block-title class="center">
        <h2>Edit Tour</h2>
      </f7-block-title>
    </f7-block>
    <f7-block>
      <f7-list>
        <f7-list-input type="text" label="Title" outline floating-label ></f7-list-input>
        <f7-list-input type="textarea" label="Description" outline floating-label></f7-list-input>
      </f7-list>
    </f7-block>
    <f7-block inset>
      <f7-row>
        <f7-col>
          <f7-button class="h-40" @click="save" fill round>Save</f7-button>
        </f7-col>
        <f7-col>
          <f7-button class="h-40" @click="cancel" outline round>Cancel</f7-button>
        </f7-col>
      </f7-row>
    </f7-block>
  </f7-page>
</template>

<script setup>
  import navbar from '@/components/navbar.vue';
  import { f7 } from 'framework7-vue';

  const save = () => {
    console.log('save')
    f7.views.main.router.navigate('/exibit/' + f7.views.main.router.currentRoute.params.id)
    f7.views.main.router.clearPreviousHistory()
  }

  const cancel = () => {
    console.log('cancel')
    f7.views.main.router.navigate('/exibit/' + f7.views.main.router.currentRoute.params.id)
    f7.views.main.router.clearPreviousHistory()
  }
</script>

<style scoped lang="scss">
.center {
  text-align: center;
}
</style>