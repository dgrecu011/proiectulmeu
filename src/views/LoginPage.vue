<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Autentificare</h1>
    <form @submit.prevent="login">
      <div class="mb-4">
        <label for="email" class="block">Email</label>
        <input type="email" id="email" v-model="email" class="border rounded p-2 w-full" required />
      </div>
      <div class="mb-4">
        <label for="password" class="block">Parola</label>
        <input type="password" id="password" v-model="password" class="border rounded p-2 w-full" required />
      </div>
      <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">Autentifică-te</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    login() {
      // Implement login logic here
      console.log("Login attempt:", this.email, this.password);
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
