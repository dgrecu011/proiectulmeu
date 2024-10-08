<template>
  <div class="container mx-auto p-6">
    <h1 class="text-3xl font-bold mb-6">Your Shopping Cart</h1>

    <!-- If the cart is empty -->
    <div v-if="cart.length === 0" class="text-center">
      <p class="text-xl">Your cart is empty.</p>
      <router-link to="/" class="text-blue-600 hover:underline mt-4 block">
        Continue shopping
      </router-link>
    </div>

    <!-- Cart Items -->
    <div v-else>
      <div class="flex flex-col space-y-4">
        <div v-for="item in cart" :key="item.id" class="flex items-center justify-between bg-white p-4 rounded-lg shadow-lg">
          <!-- Product Info -->
          <div class="flex items-center">
            <img :src="item.image" :alt="item.name" class="w-20 h-20 object-cover rounded-lg mr-4" />
            <div>
              <h2 class="text-xl font-semibold">{{ item.name }}</h2>
              <p class="text-gray-600">{{ item.description }}</p>
              <p class="text-red-600 font-bold">{{ item.discountPrice || item.price }} RON</p>
            </div>
          </div>

          <!-- Quantity Selector -->
          <div class="flex items-center space-x-2">
            <button 
              @click="updateQuantity(item, 'decrease')" 
              class="bg-gray-300 text-gray-800 px-2 py-1 rounded-lg"
            >
              -
            </button>
            <span>{{ item.quantity }}</span>
            <button 
              @click="updateQuantity(item, 'increase')" 
              class="bg-gray-300 text-gray-800 px-2 py-1 rounded-lg"
            >
              +
            </button>
          </div>

          <!-- Remove Button -->
          <button 
            @click="removeFromCart(item.id)" 
            class="text-red-600 hover:underline"
          >
            Remove
          </button>
        </div>
      </div>

      <!-- Total Price -->
      <div class="mt-6 flex justify-between items-center">
        <p class="text-2xl font-semibold">Total: {{ totalPrice }} RON</p>
        <button 
          @click="checkout" 
          class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters(["cart", "totalPrice"]),
  },
  methods: {
    ...mapActions(["removeFromCartAction", "updateQuantityAction"]),
    
    // Remove item from cart
    removeFromCart(productId) {
      this.removeFromCartAction(productId);
    },
    
    // Update product quantity in cart
    updateQuantity(item, action) {
      if (action === "increase") {
        this.updateQuantityAction({ productId: item.id, quantity: item.quantity + 1 });
      } else if (action === "decrease" && item.quantity > 1) {
        this.updateQuantityAction({ productId: item.id, quantity: item.quantity - 1 });
      }
    },
    
    // Proceed to checkout (placeholder for now)
    checkout() {
      alert("Proceeding to checkout...");
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
