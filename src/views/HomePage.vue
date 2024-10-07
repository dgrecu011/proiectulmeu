<template>
  <div class="container mx-auto my-8">
    <h1 class="text-3xl font-bold mb-6 text-center">
      Welcome to Our iPhone Store
    </h1>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
    >
      <div
        v-for="product in products"
        :key="product.id"
        class="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-200"
      >
        <img
          :src="product.image"
          class="w-full h-40 object-cover rounded-t-lg"
          :alt="product.name"
        />
        <div class="mt-2">
          <h2 class="font-semibold text-lg">{{ product.name }}</h2>
          <p class="text-gray-600">{{ product.description }}</p>
          <p class="text-xl font-bold mt-2">Price: ${{ product.price }}</p>
          <router-link
            :to="{ path: `/product/${product.id}` }"
            class="bg-blue-500 text-white mt-4 p-2 rounded block text-center"
          >
            View Product
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      products: [],
    };
  },
  created() {
    this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      try {
        const response = await axios.get("http://localhost:3000/products");
        this.products = response.data;
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
