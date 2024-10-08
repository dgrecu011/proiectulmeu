<template>
  <header class="bg-indigo-600 text-white p-4 shadow-lg sticky top-0 z-50">
    <div class="container mx-auto flex justify-between items-center transition-all duration-300 ease-in-out">
      <!-- Store Title as Home Link -->
      <router-link
        to="/"
        class="text-2xl font-bold hover:text-yellow-400 transition duration-500 ease-in-out transform hover:scale-110"
      >
        My Online Store
      </router-link>

      <!-- Navigation Links with Hover Effects -->
      <nav>
        <ul class="flex space-x-6">
          <li>
            <router-link
              to="/about"
              class="hover:text-yellow-400 transition duration-300 ease-in-out"
            >
              About Us
            </router-link>
          </li>
          <li>
            <router-link
              to="/contact"
              class="hover:text-yellow-400 transition duration-300 ease-in-out"
            >
              Contact
            </router-link>
          </li>
          <li>
            <router-link
              to="/login"
              class="hover:text-yellow-400 transition duration-300 ease-in-out"
            >
              Login
            </router-link>
          </li>
        </ul>
      </nav>

      <!-- Cart Link with Icon and Badge -->
      <div class="relative">
        <router-link
          to="/cart"
          class="text-white hover:text-yellow-400 transition duration-300 ease-in-out flex items-center"
        >
          <i class="fas fa-shopping-cart text-2xl"></i>
          <!-- Show badge only if cartItemCount > 0 -->
          <span
            v-if="cartItemCount > 0"
            class="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-green-500 rounded-full transform translate-x-1/2 -translate-y-1/2"
          >
            {{ cartItemCount }}
          </span>
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  computed: {
    // Fetch cart item count from your Vuex store or other logic
    cartItemCount() {
      // This assumes you have a Vuex store that tracks the cart items
      // Replace with your own logic to retrieve the actual cart count
      return this.$store.state.cart.length; // Example: Adjust depending on how you store cart items
    },
  },
};
</script>

<style scoped>
/* Extra Styles for Hover/Focus and other effects */
header {
  backdrop-filter: blur(10px); /* Adds a subtle blur effect for modern look */
}

nav ul li:hover {
  transform: translateY(-3px); /* Makes the links move up slightly on hover */
}

nav ul li {
  position: relative;
}

nav ul li:before {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  right: 0;
  height: 2px;
  background-color: transparent;
  transition: background-color 0.3s ease;
}

nav ul li:hover:before {
  background-color: #facc15; /* Line under link on hover matches yellow theme */
}

.router-link-active {
  font-weight: bold;
  color: #facc15; /* Active link color matching theme */
}
</style>
