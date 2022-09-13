<template>
  <f7-panel left push>
    <f7-page>
      <f7-block>
        <f7-block-title>What do you want to search for?</f7-block-title>
        <f7-list>
          <f7-list-item radio title="Tours" name="filter" @change="toursActive" :checked="isTour"></f7-list-item>
          <f7-list-item radio title="Exibitions" name="filter" @change="exibitionsActive" :checked="isExibition"></f7-list-item>
        </f7-list>
      </f7-block>
      <f7-block v-if="!isTour">
        <f7-block-title>Type of exibition</f7-block-title>
        <f7-list>
          <f7-list-item v-for="(exibition, index) in exibitionTypes" :key="index" checkbox no-chevron :title="`${exibition}`"></f7-list-item>
        </f7-list>
      </f7-block>
      <f7-block v-if="!isTour">
        <f7-block-title>Type of exibits</f7-block-title>
        <f7-list>
          <f7-list-item v-for="n in 5" checkbox no-chevron :title="`Vrsta exibita ${n}`"></f7-list-item>
        </f7-list>
      </f7-block>
      <f7-block>
        <f7-block-title class="display-flex justify-content-space-between">Number of exibits <span>{{ numMin }} - {{ numMax }}</span></f7-block-title>
        <f7-list simple-list>
          <f7-list-item>
            <f7-list-item-cell class="flex-shrink-3">
              <f7-range :min="0" :max="500" :step="1" :value="[numMin, numMax]" :dual="true" :label="true" color="#ef223c" @range:change="onNumChange" />
            </f7-list-item-cell>
          </f7-list-item>
        </f7-list>
      </f7-block>
      <f7-block>
        <f7-block-title class="display-flex justify-content-space-between">Price range <span>${{ priceMin }} - ${{ priceMax }}</span></f7-block-title>
        <f7-list simple-list>
          <f7-list-item>
            <f7-list-item-cell class="flex-shrink-3">
              <f7-range :min="10" :max="500" :step="1" :value="[priceMin, priceMax]" :dual="true" :label="true" color="#ef223c" @range:change="onPriceChange" />
            </f7-list-item-cell>
          </f7-list-item>
        </f7-list>
      </f7-block>
      <f7-block>
        <f7-block-title class="display-flex justify-content-space-between">Time to view <span>{{ timeMin }} min - {{ timeMax }} min</span></f7-block-title>
        <f7-list simple-list>
          <f7-list-item>
            <f7-list-item-cell class="flex-shrink-3">
              <f7-range :min="10" :max="500" :step="1" :value="[timeMin, timeMax]" :dual="true" :label="true" color="#ef223c" @range:change="onTimeChange" />
            </f7-list-item-cell>
          </f7-list-item>
        </f7-list>
      </f7-block>
      <f7-block>
        <f7-block-title class="display-flex justify-content-space-between">Average Review <span>{{ reviewMin }} - {{ reviewMax }}</span></f7-block-title>
        <f7-list simple-list>
          <f7-list-item>
            <f7-list-item-cell class="flex-shrink-3">
              <f7-range :min="0" :max="5" :step="1" :value="[reviewMin, reviewMax]" :dual="true" :label="true" color="#ef223c" @range:change="onReviewChange" />
            </f7-list-item-cell>
          </f7-list-item>
        </f7-list>
      </f7-block>
      <f7-block>
        <f7-row>
          <f7-col>
            <f7-button fill round>Apply</f7-button>
          </f7-col>
          <f7-col>
            <f7-button @click="reset" outline round>Reset</f7-button>
          </f7-col>
        </f7-row>
      </f7-block>
    </f7-page>
  </f7-panel>
</template>

<script setup>
import { f7, theme } from "framework7-vue";
import { ref } from "vue";

theme

let exibitTypes = f7.store.getters.exibitTypes;
let exibitionTypes = f7.store.getters.exibitionTypes;
console.log(exibitTypes, exibitionTypes);


let isTour = ref(false);
let isExibition = ref(true);

let priceMin = ref(0);
let priceMax = ref(500);
let numMin = ref(0);
let numMax = ref(500);
let timeMin = ref(10);
let timeMax = ref(500);
let reviewMin = ref(0);
let reviewMax = ref(5);

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

const reset = () => {
  priceMin.value = 0;
  priceMax.value = 500;
  numMin.value = 0;
  numMax.value = 500;
  timeMin.value = 10;
  timeMax.value = 500;
  reviewMin.value = 0;
  reviewMax.value = 5;
  isTour.value = false;
  isExibition.value = true;
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