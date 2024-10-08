// src/main.js
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store"; 
import "./assets/tailwind.css"; 
import axios from "axios";


const app = createApp(App);

// Folosește Vue Router
app.use(router);

// Folosește Vuex
app.use(store);

// Folosește Axios pentru a face o cerere API
axios
  .get("http://localhost:3000/products") // Asigură-te că json-server este activ
  .then((response) => {
    console.log(response.data); // Afișează produsele
  })
  .catch((error) => {
    console.error("Error fetching products:", error);
  });

app.mount("#app");
