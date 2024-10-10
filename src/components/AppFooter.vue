<template>
  <footer
    class="bg-gradient-to-r from-indigo-600 to-blue-700 text-white p-8 mt-12"
  >
    <div
      class="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center"
    >
      
      <div class="mb-4 md:mb-0">
        <h2 class="text-lg font-bold">Iphone Store</h2>
        <p class="text-sm">Your one-stop shop for the latest gadgets.</p>
        <p class="text-sm">Follow us on:</p>
        <div class="flex space-x-4 mt-2">
          <a href="#" class="hover:text-yellow-400"
            ><i class="fab fa-facebook"></i
          ></a>
          <a href="#" class="hover:text-yellow-400"
            ><i class="fab fa-twitter"></i
          ></a>
          <a href="#" class="hover:text-yellow-400"
            ><i class="fab fa-instagram"></i
          ></a>
        </div>
      </div>

      
      <nav class="mt-4 md:mt-0">
        <h3 class="font-semibold">Useful Links</h3>
        <ul class="flex flex-col md:flex-row md:space-x-6 mt-2">
          <li>
            <router-link
              to="/about"
              class="hover:text-yellow-400 transition duration-300 ease-in-out"
              >About Us</router-link
            >
          </li>
          <li>
            <router-link
              to="/contact"
              class="hover:text-yellow-400 transition duration-300 ease-in-out"
              >Contact</router-link
            >
          </li>
          
          <li v-if="!isLoggedIn">
            <router-link
              to="/login"
              class="hover:text-yellow-400 transition duration-300 ease-in-out"
              >Login</router-link
            >
          </li>
        </ul>
      </nav>

      
      <div class="mt-4 md:mt-0">
        <h3 class="font-semibold">Contact Us</h3>
        <p class="text-sm">Email: support@mystore.com</p>
        <p class="text-sm">Phone: +1 (234) 567-890</p>
      </div>
    </div>

    <div class="text-center mt-6">
      <p class="text-sm">© 2024 Iphone Store. All rights reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn; 
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px; 
}

footer {
  backdrop-filter: blur(10px); 
}

footer a {
  transition: color 0.3s ease; 
}
</style>
