import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import ProductPage from "../views/ProductPage.vue";
import LoginPage from "../views/LoginPage.vue";
import CartPage from "../views/CartPage.vue";
import AboutPage from "../views/AboutPage.vue";
import ContactPage from "../views/ContactPage.vue";
import RegisterPage from "@/views/RegisterPage.vue";
import CheckoutPage from "../views/CheckoutPage.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/product/:id", name: "ProductPage", component: ProductPage },
  { path: "/login", name: "Login", component: LoginPage }, // Added name here
  { path: "/cart", component: CartPage },
  { path: "/about", component: AboutPage },
  { path: "/contact", component: ContactPage },
  { path: "/register", component: RegisterPage },
  { path: "/checkout", name: "Checkout", component: CheckoutPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
