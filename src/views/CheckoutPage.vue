<template>
  <div class="container mx-auto p-6">
  
    <section
      class="text-center py-12 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-lg"
    >
      <h1 class="text-4xl font-bold">Checkout</h1>
      <p class="mt-4 text-lg">
        Complete your order by filling out the details below.
      </p>
    </section>

    <div v-if="cart.length === 0" class="text-center mt-6">
      <p class="text-xl">Your cart is empty.</p>
      <router-link to="/" class="text-blue-600 hover:underline mt-4 block">
        Continue shopping
      </router-link>
    </div>

    <div v-else>
      <h2 class="text-3xl font-semibold text-center mt-8 mb-6">Your Items</h2>
      <div class="space-y-4">
        <div
          v-for="item in cart"
          :key="`${item.id}-${item.selectedColor}`"
          class="flex items-start justify-between bg-white p-4 rounded-lg shadow-md"
        >
          <div class="flex items-center">
            <img
              :src="item.image"
              :alt="item.name"
              class="w-24 h-24 object-cover rounded-lg mr-4"
            />
            <div>
              <h3 class="text-xl font-semibold">{{ item.name }}</h3>
              <p class="text-gray-600">
                Color: {{ hexToColor(item.selectedColor) }}
              </p>
              <p class="text-gray-600">
                Price: {{ formatPrice(item.discountPrice || item.price) }} RON
              </p>
              <p class="text-gray-600">Quantity: {{ item.quantity }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-8">
        <h3 class="text-2xl font-semibold mb-4">Shipping Information</h3>
        <form
          @submit.prevent="placeOrder"
          class="bg-white p-4 rounded-lg shadow-md"
        >
          <div class="mb-4">
            <label class="block text-gray-700">Name:</label>
            <input
              type="text"
              v-model="shippingInfo.name"
              class="w-full border border-gray-300 p-2 rounded"
              required
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700">Address:</label>
            <input
              type="text"
              v-model="shippingInfo.address"
              class="w-full border border-gray-300 p-2 rounded"
              required
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700">City:</label>
            <input
              type="text"
              v-model="shippingInfo.city"
              class="w-full border border-gray-300 p-2 rounded"
              required
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700">Payment Method:</label>
            <select
              v-model="shippingInfo.paymentMethod"
              class="w-full border border-gray-300 p-2 rounded"
              required
            >
              <option value="credit_card">Credit Card</option>
              <option value="paypal">PayPal</option>
              <option value="bank_transfer">Bank Transfer</option>
            </select>
          </div>
          <button
            type="submit"
            class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>

    <transition name="fade">
      <div
        v-if="showModal"
        class="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center"
      >
        <div class="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 class="text-2xl font-semibold">Order Placed Successfully!</h2>
          <p class="mt-4">
            Your order has been placed. You will be redirected to the homepage
            in 3 seconds...
          </p>
          <button
            @click="redirectNow"
            class="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Go to Homepage Now
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      showModal: false,
      shippingInfo: {
        name: "",
        address: "",
        city: "",
        paymentMethod: "credit_card",
      },
    };
  },
  computed: {
    ...mapGetters(["cart", "totalPrice"]),
  },
  methods: {
    hexToColor(hex) {
      const colors = {
        "#000000": "Black",
        "#FFFFFF": "White",
        "#0000FF": "Blue",
        "#FF0000": "Red",
        "#F5F5DC": "Beige",
        "#4B4B4B": "Dark Gray",
        "#C0C0C0": "Silver",
        "#FFD700": "Gold",
        "#4169E1": "Royal Blue",
        "#FFC0CB": "Pink",
        "#FF7F50": "Coral",
        "#9370DB": "Medium Purple",
        "#008000": "Green",
        "#FFFF00": "Yellow",
        "#663399": "Rebecca Purple",
        "#87CEEB": "Sky Blue",
      };
      return colors[hex.toUpperCase()] || hex;
    },

    formatPrice(price) {
      return price.toFixed(2);
    },

    placeOrder() {
     
      this.$store.commit("removeAllFromCart");

    
      this.showModal = true;


      setTimeout(() => {
        this.redirectNow();
      }, 3000);
    },

    redirectNow() {
      this.showModal = false;
      this.$router.push("/"); 
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
