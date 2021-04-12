import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import AppButton from "@/components/AppButton/AppButton.vue";

const app = createApp(App);

app.use(store);
app.use(router);
app.component("AppButton", AppButton);
app.mount("#app");
