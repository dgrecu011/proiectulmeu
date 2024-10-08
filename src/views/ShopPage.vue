<template>
  <div class="container mx-auto p-4">
    <section
      class="text-center py-12 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white"
    >
      <h1 class="text-4xl font-bold">Shop Our Latest iPhones</h1>
      <p class="mt-4 text-lg">
        Find the perfect iPhone for you with our exclusive offers!
      </p>
    </section>

    <section class="my-12">
      <h2 class="text-3xl font-semibold text-center mb-6">
        Available Products
      </h2>
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

          <!-- Color selection -->
          <color-selector
            :colors="product.colors.map((color) => color.toLowerCase())"
            :selected-color="product.selectedColor"
            @color-selected="updateColor(product, $event)"
          ></color-selector>

          <div class="flex justify-between items-center mt-4">
            <router-link
              :to="`/product/${product.id}`"
              class="text-indigo-600 hover:underline"
              >View Details</router-link
            >
            <button
              @click="addToCart(product)"
              class="bg-indigo-600 text-white px-4 py-2 rounded-lg"
            >
              Add to Cart
            </button>
          </div>
          <div v-if="addedToCart === product.id" class="mt-2 text-green-600">
            ✔ Added to cart!
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions } from "vuex";
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
  methods: {
    ...mapActions(["addToCartAction"]),
    async fetchProducts() {
      try {
        const response = await fetch("http://localhost:3000/products");
        this.products = await response.json();
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },
    addToCart(product) {
      this.addToCartAction(product);
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
      product.selectedColor = color; // Update the selected color of the product
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
