// Import Vue
import { createApp } from "vue";

// Import Framework7
import Framework7 from "framework7/lite-bundle";

// Import Framework7-Vue Plugin
import Framework7Vue, { registerComponents } from "framework7-vue/bundle";

// Import Framework7 Styles
import "framework7/css/bundle";

// Import Icons and App Custom Styles
import "../css/icons.css";
import "../css/app.scss";

// Import App Component
import App from "../components/app.vue";
import Box from "../components/Box.vue";
import Stepper from "../components/Stepper.vue";
import Loader from "../components/Loader.vue";

// Init Framework7-Vue Plugin
Framework7.use(Framework7Vue);

// Init App
const app = createApp(App);

// Register Framework7 Vue components
registerComponents(app);

app.component("Box", Box);
app.component("Stepper", Stepper);
app.component("Loader", Loader);

// Mount the app
app.mount("#app");
