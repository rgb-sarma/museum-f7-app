<template>
  <f7-page>
    <Navbar />
    <f7-block>
      <f7-button @click="openCreate" raised outline round>+ Create new tour</f7-button>
      <f7-list v-if="isCreating">
        <f7-list-input type="text" label="Name" placeholder="Input name of tour" outline floating-label></f7-list-input>
        <f7-list-input v-model:value="date" type="datepicker" label="Date" placeholder="Input date" :calendar-params="{ dateFormat: 'dd MM yyyy' }" readonly outline floating-label></f7-list-input>
        <f7-block inset>
          <f7-row>
            <f7-col>
              <f7-button fill round>Confrim</f7-button>
            </f7-col>
            <f7-col>
              <f7-button @click="cancelCreate" outline round>Cancel</f7-button>
            </f7-col>
          </f7-row>
        </f7-block>
      </f7-list>
    </f7-block>
    <f7-block>
      
    </f7-block>
  </f7-page>
</template>
<script setup>
import { ref } from 'vue';
import Navbar from '../components/navbar.vue';

let isCreating = ref(false);
let date = ref(null)

const openCreate = () => {
  isCreating.value = true;
}

const cancelCreate = () => {
  isCreating.value = false;
}

</script>