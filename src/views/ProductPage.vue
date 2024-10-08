<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Detalii Produs</h1>
    <div v-if="product">
      <img :src="product.image" alt="Product Image" class="mb-2" />
      <h2 class="text-lg font-semibold">{{ product.name }}</h2>
      <p>{{ product.description }}</p>
      <p class="text-xl font-bold">{{ product.price }} RON</p>
      <button @click="addToCart" class="bg-green-500 text-white px-4 py-2 rounded mt-2">
        Adaugă în coș
      </button>
    </div>
    <button @click="goToHome" class="mt-4 text-blue-500">
      Înapoi la produse
    </button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      product: null,
    };
  },
  methods: {
    addToCart() {
      this.$store.commit("addToCart", this.product);
    },
    goToHome() {
      this.$router.push({ path: "/" });
    },
  },
  mounted() {
    const productId = this.$route.params.id;
    axios.get(`http://localhost:3000/products/${productId}`).then((response) => {
      this.product = response.data;
    });
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
