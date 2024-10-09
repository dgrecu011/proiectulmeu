
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store"; 
import "./assets/tailwind.css"; 
import axios from "axios";


const app = createApp(App);


app.use(router);


app.use(store);


axios
  .get("http://localhost:3000/products") 
  .then((response) => {
    console.log(response.data); 
  })
  .catch((error) => {
    console.error("Error fetching products:", error);
  });

app.mount("#app");
