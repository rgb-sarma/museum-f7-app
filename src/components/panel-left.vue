<template>
  <f7-panel left push>
    <f7-page>
      <f7-block>
        <f7-block-title>What do you want to search for?</f7-block-title>
        <f7-list>
          <f7-list-item radio title="Exibitions" name="filter" @change="exibitionsActive" :checked="isExibition"></f7-list-item>
          <f7-list-item radio title="Tours" name="filter" @change="toursActive" :checked="isTour"></f7-list-item>
        </f7-list>
      </f7-block>
      <f7-block v-show="!isTour">
        <f7-block-title>Type of exibition</f7-block-title>
        <f7-list>
          <f7-list-item v-for="exibition in exibitionTypes.value" checkbox no-chevron :title="exibition"></f7-list-item>
        </f7-list>
      </f7-block>
      <f7-block v-show="!isTour">
        <f7-block-title>Type of exibits</f7-block-title>
        <f7-list>
          <f7-list-item v-for="exibit in exibitTypes.value" checkbox no-chevron :title="exibit" ></f7-list-item>
        </f7-list>
      </f7-block>
      <f7-block>
        <f7-block-title class="display-flex justify-content-space-between">Number of exibits <span>{{ numMin }} - {{ numMax }}</span></f7-block-title>
        <f7-list simple-list>
          <f7-list-item>
            <f7-list-item-cell class="flex-shrink-3">
              <f7-range :min="0" :max="100" :step="1" :value="[numMin, numMax]" :dual="true" :label="true" color="#ef223c" @range:change="onNumChange" />
            </f7-list-item-cell>
          </f7-list-item>
        </f7-list>
      </f7-block>
      <f7-block>
        <f7-block-title class="display-flex justify-content-space-between">Price range <span>${{ priceMin }} - ${{ priceMax }}</span></f7-block-title>
        <f7-list simple-list>
          <f7-list-item>
            <f7-list-item-cell class="flex-shrink-3">
              <f7-range :min="0" :max="1500" :step="1" :value="[priceMin, priceMax]" :dual="true" :label="true" color="#ef223c" @range:change="onPriceChange" />
            </f7-list-item-cell>
          </f7-list-item>
        </f7-list>
      </f7-block>
      <f7-block>
        <f7-block-title class="display-flex justify-content-space-between">Time to view <span>{{ timeMin }} min - {{ timeMax }} min</span></f7-block-title>
        <f7-list simple-list>
          <f7-list-item>
            <f7-list-item-cell class="flex-shrink-3">
              <f7-range :min="0" :max="500" :step="1" :value="[timeMin, timeMax]" :dual="true" :label="true" color="#ef223c" @range:change="onTimeChange" />
            </f7-list-item-cell>
          </f7-list-item>
        </f7-list>
      </f7-block>
      <f7-block>
        <f7-block-title class="display-flex justify-content-space-between">Average Review <span>{{ reviewMin }} - {{ reviewMax }}</span></f7-block-title>
        <f7-list simple-list>
          <f7-list-item>
            <f7-list-item-cell class="flex-shrink-3">
              <f7-range :min="1" :max="5" :step="1" :value="[reviewMin, reviewMax]" :dual="true" :label="true" color="#ef223c" @range:change="onReviewChange" />
            </f7-list-item-cell>
          </f7-list-item>
        </f7-list>
      </f7-block>
      <f7-block>
        <f7-row>
          <f7-col>
            <f7-button panel-close fill round @click="applyFilters">Apply</f7-button>
          </f7-col>
          <f7-col>
            <f7-button panel-close @click="reset" outline round>Reset</f7-button>
          </f7-col>
        </f7-row>
      </f7-block>
    </f7-page>
  </f7-panel>
</template>

<script setup>
import _ from "@/js/utils";
import store from '@/js/store.js'
import { reactive, ref } from "vue";

let exibitTypes = reactive(store.state.exibitTypes);
let exibitionTypes = reactive(store.state.exibitionTypes);

let isTour = ref(false);
let isExibition = ref(true);


let numMin = ref(0);
let numMax = ref(100);
let priceMin = ref(0);
let priceMax = ref(1500);
let timeMin = ref(0);
let timeMax = ref(500);
let reviewMin = ref(1);
let reviewMax = ref(5);

const resetValues = () => {
  priceMin.value = 0;
  priceMax.value = 1500;
  numMin.value = 0;
  numMax.value = 100;
  timeMin.value = 0;
  timeMax.value = 500;
  reviewMin.value = 1;
  reviewMax.value = 5;
  isTour.value = false;
  isExibition.value = true;
}

let reset = async () => {
  resetValues()
  await store.dispatch('changeFilters', {
    isTour: isTour.value,
    isExibition: isExibition.value,
    priceMin: priceMin.value,
    priceMax: priceMax.value,
    numMin: numMin.value,
    numMax: numMax.value,
    timeMin: timeMin.value,
    timeMax: timeMax.value,
    reviewMin: reviewMin.value,
    reviewMax: reviewMax.value
  })
}
reset()


let applyFilters = async () => {
  await store.dispatch('changeFilters', {
    isTour: isTour.value,
    isExibition: isExibition.value,
    priceMin: priceMin.value,
    priceMax: priceMax.value,
    numMin: numMin.value,
    numMax: numMax.value,
    timeMin: timeMin.value,
    timeMax: timeMax.value,
    reviewMin: reviewMin.value,
    reviewMax: reviewMax.value
  })
}

// no clue all this below
let onPriceChange = (e) => {
  priceMin.value = e[0];
  priceMax.value = e[1];
  // console.log(e);
};

const onNumChange = (e) => {
  numMin.value = e[0];
  numMax.value = e[1];
  // console.log(e);
};

let onTimeChange = (e) => {
  timeMin.value = e[0];
  timeMax.value = e[1];
  // console.log(e);
};

const onReviewChange = (e) => {
  reviewMin.value = e[0];
  reviewMax.value = e[1];
  // console.log(e);
};


const toursActive = () => {
  if(isTour.value) {
    isTour.value = false;
    isExibition.value = true;
  } else {
    isTour.value = true;
    isExibition.value = false;
  }
};

const exibitionsActive = () => {
  if(isExibition.value) {
    isExibition.value = false;
    isTour.value = true;
  } else {
    isExibition.value = true;
    isTour.value = false;
  }
};

</script>

<style>

</style>