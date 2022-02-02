import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/projects";
import VueSmoothScroll from "vue3-smooth-scroll";

createApp(App).use(VueSmoothScroll).use(store).use(router).mount("#app");
