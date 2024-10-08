<template>
  <div class="container mx-auto p-6">
    <div v-if="product" class="flex flex-col lg:flex-row items-center">
      <!-- Product Image -->
      <div class="w-full lg:w-1/2">
        <img :src="product.image" :alt="product.name" class="w-full h-auto rounded-lg shadow-lg" />
      </div>

      <!-- Product Details -->
      <div class="w-full lg:w-1/2 lg:pl-10 mt-6 lg:mt-0">
        <h1 class="text-3xl font-bold mb-4">{{ product.name }}</h1>
        <p class="text-lg mb-6">{{ product.description }}</p>
        
        <!-- Pricing -->
        <div class="mb-4">
          <span v-if="product.discountPrice" class="text-2xl font-semibold text-red-600 mr-4">
            {{ product.discountPrice }} RON
          </span>
          <span v-if="product.discountPrice" class="text-lg line-through text-gray-500">
            {{ product.price }} RON
          </span>
          <span v-else class="text-2xl font-semibold text-gray-800">
            {{ product.price }} RON
          </span>
        </div>

        <!-- Add to Cart Button -->
        <button 
          @click="addToCart(product)" 
          class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Add to Cart
        </button>

        <!-- Feedback after adding to cart -->
        <div v-if="cartMessage" class="mt-4 text-green-500 font-semibold">
          {{ cartMessage }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import axios from "axios";

export default {
  data() {
    return {
      product: null,
      cartMessage: "",
    };
  },
  methods: {
    ...mapActions(["addToCartAction"]),
    
    // Fetch product by ID
    fetchProduct() {
      const productId = this.$route.params.id;
      axios.get(`http://localhost:3000/products/${productId}`)
        .then(response => {
          this.product = response.data;
        })
        .catch(error => {
          console.error("Error fetching product:", error);
        });
    },

    // Add product to cart
    addToCart(product) {
      this.addToCartAction(product);
      this.cartMessage = `${product.name} was added to your cart!`;
      
      // Clear message after 3 seconds
      setTimeout(() => {
        this.cartMessage = "";
      }, 3000);
    }
  },
  created() {
    this.fetchProduct();
  }
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
