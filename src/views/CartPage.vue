<template>
  <div class="container mx-auto">
    <h1 class="text-2xl font-bold">Shopping Cart</h1>
    <div v-if="cartItems.length === 0">Your cart is empty.</div>
    <div v-else>
      <div v-for="item in cartItems" :key="item.id" class="border p-4 rounded">
        <h2 class="font-semibold">{{ item.name }}</h2>
        <p>Price: ${{ item.price }}</p>
      </div>
      <button class="bg-blue-500 text-white p-2 rounded">Checkout</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cartItems: [], // Replace with your cart state
    };
  },
  created() {
    this.fetchCartItems();
  },
  methods: {
    fetchCartItems() {
      // Mock fetching cart items
      this.cartItems = [
        { id: 1, name: "iPhone 12", price: 999 },
        { id: 2, name: "iPhone 13", price: 1199 },
      ];
    },
  },
};
</script>
