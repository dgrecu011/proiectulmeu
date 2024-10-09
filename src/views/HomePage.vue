<template>
  <div class="container mx-auto p-4">
    <!-- Header principal -->
    <section
      class="text-center py-12 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white"
    >
      <h1 class="text-4xl font-bold">Welcome to Our iPhone Store!</h1>
      <p class="mt-4 text-lg">
        Discover the latest iPhones with exclusive offers and discounts.
      </p>
    </section>

    <!-- Produse recomandate -->
    <section class="my-12">
      <h2 class="text-3xl font-semibold text-center mb-6">Featured Products</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="product in products"
          :key="product.id"
          class="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition-shadow duration-300"
        >
          <img
            :src="product.image"
            :alt="product.name"
            class="w-full h-48 object-cover rounded-t-lg"
          />
          <h3 class="text-xl font-semibold mt-4">{{ product.name }}</h3>
          <p class="text-gray-500">{{ product.description }}</p>
          <p class="text-lg font-bold mt-2 text-indigo-600">
            {{ formatPrice(product.price) }} €
          </p>

          <!-- Color selection using the new component -->
          <color-selector
            :colors="product.colors.map(color => color.toLowerCase())"
            :selected-color="product.selectedColor"
            @color-selected="updateColor(product, $event)"
          ></color-selector>

          <div class="flex justify-between items-center mt-4">
            <router-link
              :to="`/product/${product.id}`"
              class="text-indigo-600 hover:underline"
            >View Details</router-link>
            <button
              @click="addToCart(product)"
              class="bg-indigo-600 text-white px-4 py-2 rounded-lg"
            >
              Add to Cart
            </button>
          </div>
          <!-- Badge verde care apare când produsul este adăugat în coș -->
          <div v-if="addedToCart === product.id" class="mt-2 text-green-600">
            ✔ Added to cart!
          </div>
        </div>
      </div>
    </section>

    <!-- Bannere promotionale -->
    <section class="bg-gray-100 py-12 mt-16">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          class="bg-gradient-to-r from-green-400 to-blue-500 p-8 text-white rounded-lg shadow-lg"
        >
          <h3 class="text-2xl font-bold">
            Special Discount for New Customers!
          </h3>
          <p class="mt-4">
            Get 10% off your first purchase. Limited time offer!
          </p>
          <router-link
            to="/shop"
            class="inline-block mt-6 bg-white text-green-600 font-bold px-6 py-2 rounded-lg"
          >Shop Now</router-link>
        </div>
        <div
          class="bg-gradient-to-r from-yellow-400 to-red-500 p-8 text-white rounded-lg shadow-lg"
        >
          <h3 class="text-2xl font-bold">
            Buy an iPhone, Get Free Accessories!
          </h3>
          <p class="mt-4">
            Offer valid for selected models only. Don't miss out!
          </p>
          <router-link
            to="/shop"
            class="inline-block mt-6 bg-white text-red-600 font-bold px-6 py-2 rounded-lg"
          >Explore Now</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ColorSelector from "../components/ColorSelector.vue";

export default {
  components: {
    ColorSelector,
  },
  data() {
    return {
      products: [],
      addedToCart: null, // ID-ul produsului adăugat în coș
    };
  },
  computed: {
    ...mapGetters(["cart"]),
  },
  methods: {
    ...mapActions(["addToCartAction"]),
    async fetchProducts() {
      try {
        const response = await fetch("http://localhost:3000/products");
        this.products = await response.json();
        
        // Asigură-te că selectedColor are o valoare implicită
        this.products.forEach(product => {
          if (!product.selectedColor) {
            product.selectedColor = product.colors[0].toLowerCase(); // Setează prima culoare ca valoare implicită
          }
        });
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },
    addToCart(product) {
      const color = product.selectedColor || null; // Nu convertim culoarea
      const productToAdd = { ...product, selectedColor: color }; // Folosim culoarea așa cum este
      this.addToCartAction(productToAdd);
      this.addedToCart = product.id;
      // Setăm badge-ul să dispară după 3 secunde
      setTimeout(() => {
        this.addedToCart = null;
      }, 3000);
    },
    formatPrice(price) {
      return price.toFixed(2);
    },
    updateColor(product, color) {
      product.selectedColor = color.toLowerCase(); // Convertim culoarea la litere mici
    },
  },
  mounted() {
    this.fetchProducts();
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
