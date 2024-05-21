import { createApp } from "vue";

import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./router";
import navBarre from "./components/navBarre.vue";
import TheFooter from "./components/TheFooter.vue";
const app = createApp(App);
const pinia = createPinia();
app.use(router);
app.use(pinia);

app.component("navBarre", navBarre);
app.component("TheFooter", TheFooter);
app.component("aPropos", aPropos);
app.mount("#app");
