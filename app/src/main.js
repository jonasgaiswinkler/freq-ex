import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import { initializeApp } from "firebase/app";
import firebaseConfig from "./config/firebaseConfig.json";

initializeApp(firebaseConfig);

// import { getFunctions, connectFunctionsEmulator } from "firebase/functions";
// const functions = getFunctions();
// connectFunctionsEmulator(functions, "localhost", 5001);

createApp(App).use(store).use(router).mount("#app");
