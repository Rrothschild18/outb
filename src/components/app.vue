<template>
  <f7-app v-bind="f7params">
    <f7-view main class="safe-areas" url="/"></f7-view>
  </f7-app>
</template>
<script>
import { onMounted } from "vue";
import { f7ready } from "framework7-vue";

import routes from "../js/routes.js";
import store from "../js/store";

export default {
  setup() {
    const f7params = {
      name: "Outb", // App name
      theme: "auto", // Automatic theme detection

      // App store
      store: store,
      // App routes
      routes: routes,
    };

    onMounted(() => {
      f7ready(() => {
        // Call F7 APIs here
      });
    });

    return {
      f7params,
    };
  },
};
</script>
