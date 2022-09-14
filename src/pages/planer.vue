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

const init = async () => {
  let [res, err] = await f7.store.dispatch('getAllTours');
  if (err) f7.dialog.alert(err);
  await f7.store.dispatch('addTours', res.data.tours)

  console.log(res.data.tours);
}

let allTours = reactive(f7.store.state.allTours);


const createTour = async () => {
  console.log(tourName.value);
  console.log(tourDesc.value);

  let data = {
    tou_name: tourName.value,
    tou_description: tourDesc.value
  }

  let [res, err] = await f7.store.dispatch('createTour', data)

  if (err) {f7.dialog.alert(err)} else {
    f7.dialog.alert('Tour created successfully')
  }
  console.log(res);
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