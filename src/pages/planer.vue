<template>
  <f7-page @page:afterin="init">
    <Navbar />
    <f7-block>
      <f7-button @click="openCreate" raised outline round>+ Create new tour</f7-button>
      <f7-list v-if="isCreating">
        <f7-list-input type="text" label="Name" placeholder="Input name of tour" v-model:value="tourName" outline floating-label></f7-list-input>
        <f7-list-input type="textarea" label="Description" placeholder="Input tour description" v-model:value="tourDesc" outline floating-label></f7-list-input>
        <f7-block inset>
          <f7-row>
            <f7-col>
              <f7-button @click="createTour" fill round>Confrim</f7-button>
            </f7-col>
            <f7-col>
              <f7-button @click="cancelCreate" outline round>Cancel</f7-button>
            </f7-col>
          </f7-row>
        </f7-block>
      </f7-list>
    </f7-block>
    <f7-block>
      <f7-list>
        <f7-list-item v-for="(tour) in allTours" :key="tour.tou_id" :title="tour.tou_name" :text="tour.tou_description" :link="`/tour/${tour.tou_id}`"></f7-list-item>
      </f7-list>
    </f7-block>
    <f7-block>
      
    </f7-block>
  </f7-page>
</template>
<script setup>
import { ref, reactive } from 'vue';
import Navbar from '../components/navbar.vue';
import { f7 } from 'framework7-vue';

let isCreating = ref(false);

let tourName = ref('');
let tourDesc = ref('');


const createTour = () => {
  console.log(tourName.value, tourDesc.value);
  tourName.value = '';
  tourDesc.value = '';
  isCreating.value = false;
}

const openCreate = () => {
  isCreating.value = true;
}

const cancelCreate = () => {
  isCreating.value = false;
}

</script>