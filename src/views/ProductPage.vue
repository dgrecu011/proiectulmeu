<template>
  <div class="container mx-auto">
    <h1 class="text-2xl font-bold">{{ product.name }}</h1>
    <img :src="product.image" class="w-full h-60 object-cover" />
    <p>{{ product.description }}</p>
    <p>Price: ${{ product.price }}</p>
    <button @click="addToCart" class="bg-green-500 text-white p-2 rounded">
      Add to Cart
    </button>
    <router-link to="/cart">
      <button class="bg-blue-500 text-white p-2 rounded">Go to Cart</button>
    </router-link>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      product: {},
    };
  },
  async created() {
    await this.fetchProduct();
  },
  methods: {
    async fetchProduct() {
      try {
        const response = await axios.get(
          `http://localhost:3000/products/${this.$route.params.id}`
        );
        this.product = response.data;
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    },
    addToCart() {
      // Your logic to add to cart
      console.log(`Added ${this.product.name} to cart`);
    },
  },
};
</script>
