<template>
  <header class="bg-gray-800 text-white p-4">
    <div class="container mx-auto flex justify-between items-center">
      <h1 class="text-2xl font-bold">My Online Store</h1>
      <!-- Store Title -->
      <nav>
        <ul class="flex space-x-4">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About Us</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
          <li><router-link to="/login">Login</router-link></li>
        </ul>
      </nav>
      <div>
        <router-link to="/cart" class="text-white">
          <i class="fas fa-shopping-cart"></i> Cart
          <!-- Placeholder for cart icon -->
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<style scoped>
/* Styles for Header */
</style>
