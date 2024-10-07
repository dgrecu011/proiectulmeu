import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store"; // Ensure store is correctly imported
import "./assets/tailwind.css"; // Add Tailwind CSS
import axios from "axios"; // Import Axios

// Create the Vue application
const app = createApp(App);

// Use the router and store
app.use(router);
app.use(store);

// Fetch products using Axios (optional, you can do this inside a component)
axios
  .get("http://localhost:3000/products") // Ensure json-server is running
  .then((response) => {
    console.log(response.data); // Log the products
  })
  .catch((error) => {
    console.error("Error fetching products:", error);
  });

// Mount the app
app.mount("#app");
