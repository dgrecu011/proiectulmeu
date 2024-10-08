<template>
  <header class="bg-indigo-600 text-white p-4 shadow-lg sticky top-0 z-50">
    <div
      class="container mx-auto flex justify-between items-center transition-all duration-300 ease-in-out"
    >
      <router-link
        to="/"
        class="text-2xl font-bold hover:text-yellow-400 transition duration-500 ease-in-out transform hover:scale-110"
      >
        My Online Store
      </router-link>

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
          <li v-if="!isLoggedIn">
            <router-link
              to="/login"
              class="hover:text-yellow-400 transition duration-300 ease-in-out"
            >
              Login
            </router-link>
          </li>
          <li v-if="isLoggedIn">
            <button
              @click="logout"
              class="hover:text-yellow-400 transition duration-300 ease-in-out bg-transparent border-0 text-white cursor-pointer"
            >
              Logout
            </button>
          </li>
        </ul>
      </nav>

      <div class="relative">
        <router-link
          to="/cart"
          class="text-white hover:text-yellow-400 transition duration-300 ease-in-out flex items-center"
        >
          <i class="fas fa-shopping-cart text-2xl"></i>
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
    cartItemCount() {
      return this.$store.state.cart.length;
    },
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },
  },
  methods: {
    logout() {
      // Folosește Vuex pentru a gestiona deconectarea
      this.$store.dispatch("logoutUserAction");
      this.$router.push("/");
    },
  },
};
</script>
