<template>
  <f7-panel left push>
    <f7-page>
      <f7-block>
        <f7-block-title>Type of exibition</f7-block-title>
        <f7-list>
          <f7-list-item v-for="n in 5" checkbox no-chevron :title="`Vrsta ${n}`"></f7-list-item>
        </f7-list>
      </f7-block>
      <f7-block>
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
    </f7-page>
  </f7-panel>
</template>

<script setup>
import { theme } from "framework7-vue";
import { ref } from "vue";

theme

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

</script>

<style>

</style>