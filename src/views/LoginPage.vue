<template>
  <div class="container mx-auto">
    <h1 class="text-2xl font-bold">Login</h1>
    <form @submit.prevent="handleLogin" class="my-4">
      <input v-model="email" type="email" placeholder="Email" required />
      <input
        v-model="password"
        type="password"
        placeholder="Password"
        required
      />
      <button type="submit" class="bg-blue-500 text-white p-2 rounded">
        Login
      </button>
      <p v-if="isRegistering">
        Don't have an account?
        <button @click="toggleRegister">Register here</button>
      </p>
    </form>
    <form v-if="isRegistering" @submit.prevent="handleRegister" class="my-4">
      <h2 class="text-xl">Register</h2>
      <input
        v-model="registerEmail"
        type="email"
        placeholder="Email"
        required
      />
      <input
        v-model="registerPassword"
        type="password"
        placeholder="Password"
        required
      />
      <button type="submit" class="bg-green-500 text-white p-2 rounded">
        Register
      </button>
      <p v-if="!isRegistering">
        Already have an account?
        <button @click="toggleRegister">Login here</button>
      </p>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      registerEmail: "",
      registerPassword: "",
      isRegistering: false,
    };
  },
  methods: {
    handleLogin() {
      // Logic for logging in
      console.log("Logging in:", this.email);
    },
    handleRegister() {
      // Logic for registration
      console.log("Registering:", this.registerEmail);
    },
    toggleRegister() {
      this.isRegistering = !this.isRegistering;
    },
  },
};
</script>
