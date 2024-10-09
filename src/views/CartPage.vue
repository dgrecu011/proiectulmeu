<template>
  <div class="container mx-auto p-6">
    <h1 class="text-3xl font-bold mb-6">Your Shopping Cart</h1>

    <div v-if="cart.length === 0" class="text-center">
      <p class="text-xl">Your cart is empty.</p>
      <router-link to="/" class="text-blue-600 hover:underline mt-4 block">
        Continue shopping
      </router-link>
    </div>

    <div v-else>
      <div class="flex flex-col space-y-4">
        <div
          v-for="item in cart"
          :key="`${item.id}-${item.selectedColor}`"
          class="flex items-center justify-between bg-white p-4 rounded-lg shadow-lg"
        >
          <div class="flex items-center">
            <img
              :src="item.image"
              :alt="item.name"
              class="w-20 h-20 object-cover rounded-lg mr-4"
            />
            <div>
              <h2 class="text-xl font-semibold">
                {{ item.name }} - {{ hexToColor(item.selectedColor) }}
              </h2>
              <p class="text-gray-600">{{ item.description }}</p>
              <p class="text-red-600 font-bold">
                {{ item.discountPrice || item.price }} RON
              </p>
            </div>
          </div>

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

          <button
            @click="removeFromCart(item.id, item.selectedColor)"
            class="text-red-600 hover:underline"
          >
            Remove
          </button>
        </div>
      </div>

      <button
        @click="removeAll"
        class="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
      >
        Remove All
      </button>

      <div class="mt-6 flex justify-between items-center">
        <p class="text-2xl font-semibold">Total: {{ totalPrice }} RON</p>
        <button
          @click="proceedToCheckout"
          class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Proceed to Checkout
        </button>
      </div>

      <div v-if="!isLoggedIn" class="mt-4 text-red-600 text-center">
        You must be logged in to proceed to checkout.
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters(["cart", "totalPrice", "isLoggedIn"]),
  },
  methods: {
    ...mapActions([
      "removeFromCartAction",
      "removeAllFromCartAction",
      "updateQuantityAction",
    ]),

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

    removeFromCart(productId, selectedColor) {
      this.removeFromCartAction({ productId, selectedColor });
    },

    removeAll() {
      this.removeAllFromCartAction();
    },

    updateQuantity(item, action) {
      if (action === "increase") {
        this.updateQuantityAction({
          productId: item.id,
          selectedColor: item.selectedColor,
          quantity: item.quantity + 1,
        });
      } else if (action === "decrease" && item.quantity > 1) {
        this.updateQuantityAction({
          productId: item.id,
          selectedColor: item.selectedColor,
          quantity: item.quantity - 1,
        });
      }
    },

    proceedToCheckout() {
      if (!this.isLoggedIn) {
        this.$router.push({ name: "Login", query: { redirect: "checkout" } });
      } else {
        this.$router.push({ name: "Checkout" });
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
