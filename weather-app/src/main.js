import { createApp } from "vue";

import App from "./App.vue";
import store from "./store";
import VueCustomElement from "vue-custom-element";
createApp(App).use(store).use(VueCustomElement).mount("weather-app");

// const myApp =  defineCustomElement(createApp(App).mount("weather-app"))

// customElements.define("weather-app", myApp  );
