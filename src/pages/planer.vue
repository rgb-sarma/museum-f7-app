<template>
  <f7-page>
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
    <f7-toolbar tabbar bottom>
      <f7-link tab-link="#ongoing" tab-link-active>Ongoing</f7-link>
      <f7-link tab-link="#finished">Finished</f7-link>
      <f7-link tab-link="#canceled">Canceled</f7-link>
    </f7-toolbar>
    <f7-tabs swipeable>
      <f7-tab id="ongoing" tab-active>
        <f7-block>
          <f7-list media-list>
            <f7-list-item 
              header="01.02.2022"
              title="Title" 
              subtitle=""
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et lorem quis est imperdiet tincidunt. Sed et lorem quis est imperdiet tincidunt."          
              footer="30 min, $1200" 
              badge="owner"
              badge-color="#ef223c"
              link="/tour/1" 
              no-chevron>
            </f7-list-item>
          </f7-list>
        </f7-block>
      </f7-tab>
      <f7-tab id="finished">
        <f7-block>
          <f7-list media-list>
            <f7-list-item 
              header="01.01.2022"
              title="Title" 
              subtitle=""
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et lorem quis est imperdiet tincidunt. Sed et lorem quis est imperdiet tincidunt."          
              badge="owner"
              badge-color="#ef223c"
              link="/tour/1" 
              no-chevron>
            </f7-list-item>
          </f7-list>
        </f7-block>
      </f7-tab>
      <f7-tab id="canceled">
        <f7-block>
          <f7-list media-list>
            <f7-list-item 
              header="01.01.2022"
              title="Title 2" 
              subtitle=""
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et lorem quis est imperdiet tincidunt. Sed et lorem quis est imperdiet tincidunt."          
              badge=""
              badge-color="#ef223c"
              link="/tour/1" 
              no-chevron>
            </f7-list-item>
          </f7-list>
        </f7-block>
      </f7-tab>
    </f7-tabs>
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