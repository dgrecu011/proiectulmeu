<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Produse</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div
        v-for="product in products"
        :key="product.id"
        class="border p-4 rounded-lg"
      >
        <img :src="product.image" alt="Product Image" class="mb-2" />
        <h2 class="text-lg font-semibold">{{ product.name }}</h2>
        <p>{{ product.description }}</p>
        <button
          @click="goToProductPage(product.id)"
          class="bg-blue-500 text-white px-4 py-2 rounded mt-2"
        >
          Vezi detalii
        </button>
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
  methods: {
    goToProductPage(id) {
      this.$router.push({ name: "ProductPage", params: { id } });
    },
  },
  mounted() {
    axios.get("http://localhost:3000/products").then((response) => {
      this.products = response.data;
    });
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
