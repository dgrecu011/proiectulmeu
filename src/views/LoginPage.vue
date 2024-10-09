<template>
  <div class="container mx-auto p-4">
    
    <section
      class="text-center py-12 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-white rounded-lg"
    >
      <h1 class="text-4xl font-bold">Autentificare</h1>
      <p class="mt-4 text-lg">
        Conectează-te la contul tău pentru a accesa toate funcționalitățile!
      </p>
    </section>

    
    <section class="my-12 bg-gray-100 p-6 rounded-lg shadow-lg">
      <form @submit.prevent="login" class="space-y-4">
        <div>
          <label class="block mb-2" for="email">Email</label>
          <input
            v-model="email"
            type="email"
            id="email"
            class="border border-gray-300 p-2 w-full rounded-lg"
            required
          />
        </div>
        <div>
          <label class="block mb-2" for="password">Parolă</label>
          <input
            v-model="password"
            type="password"
            id="password"
            class="border border-gray-300 p-2 w-full rounded-lg"
            required
          />
        </div>
        <button
          type="submit"
          class="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-600 transition duration-300 w-full"
        >
          Conectează-te
        </button>
      </form>
      <p class="mt-4 text-center">
        Nu ai un cont?
        <router-link to="/register" class="text-blue-600 hover:underline">
          Înscrie-te acum!
        </router-link>
      </p>
    </section>

    
    <div v-if="error" class="mt-4 text-red-600 text-center">
      {{ error }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      error: "",
    };
  },
  methods: {
    login() {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const user = users.find(
        (user) => user.email === this.email && user.password === this.password
      );

      if (user) {
        this.$store.dispatch("loginUser", user);
        const redirect = this.$route.query.redirect || '/';
        this.$router.push(redirect);
      } else {
        this.error = "Email sau parolă incorectă.";
      }
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 600px; 
}
</style>
