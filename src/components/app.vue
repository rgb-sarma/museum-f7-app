<template>
  <f7-app v-bind="f7params">
    <!-- Your main view, should have "view-main" class -->
    <f7-view main class="safe-areas" url="/"></f7-view>

    <panelRightComponent />
    <panelLeftComponent />

  </f7-app>
</template>

<script setup>
  import panelRightComponent from './panel-right.vue';
  import panelLeftComponent from './panel-left.vue';
  
  import { onMounted,  } from 'vue';
  import { f7, f7ready } from 'framework7-vue';

  import { getDevice }  from 'framework7/lite-bundle';
  import capacitorApp from '../js/capacitor-app.js';
  import routes from '../js/routes.js';
  import store from '@/js/store.js';

  
  const device = getDevice();
  // Framework7 Parameters
  const f7params = {
    name: 'Museum App', // App name
    theme: 'auto', // Automatic theme detection
    id: 'io.framework7.myapp', // App bundle ID
    // App store
    store: store,
    // App routes
    routes: routes,
    // Input settings
    input: {
      scrollIntoViewOnFocus: device.capacitor,
      scrollIntoViewCentered: device.capacitor,
    },
    // Capacitor Statusbar settings
    statusbar: {
      iosOverlaysWebView: true,
      androidOverlaysWebView: false,
    },
  };

  let init = () => {
    let data = localStorage.getItem('credentials') || '{}';
    if (data) {
      let credentials = JSON.parse(data);
      // f7.store.dispatch('login', credentials);
    }
  }

  onMounted(() => {
    f7ready(() => {
      // Init capacitor APIs (see capacitor-app.js)
      if (device.capacitor) {
        capacitorApp.init(f7);
      }
      // Call F7 APIs here
      init()
    });
  });

</script>