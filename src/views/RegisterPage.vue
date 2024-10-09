<template>
  <div class="container mx-auto p-4">
    
    <section
      class="text-center py-12 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-lg"
    >
      <h1 class="text-4xl font-bold">Creează-ți Contul</h1>
      <p class="mt-4 text-lg">
        Înscrie-te pentru a avea acces la cele mai bune oferte!
      </p>
    </section>

    
    <section class="my-12 bg-gray-100 p-6 rounded-lg shadow-lg">
      <form @submit.prevent="register" class="space-y-4">
        <div>
          <label class="block mb-2" for="name">Nume</label>
          <input
            v-model="name"
            type="text"
            id="name"
            class="border border-gray-300 p-2 w-full rounded-lg"
            required
          />
        </div>
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
          Înscrie-te
        </button>
      </form>
      <p class="mt-4 text-center">
        Ai deja un cont?
        <router-link to="/login" class="text-blue-600 hover:underline"
          >Conectează-te acum!</router-link
        >
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
      name: "",
      email: "",
      password: "",
      error: "",
    };
  },
  methods: {
    register() {
      if (this.name && this.email && this.password) {
        
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const userExists = users.find((user) => user.email === this.email);

        if (userExists) {
          this.error = "Acest email este deja utilizat.";
          return;
        }

        users.push({
          name: this.name,
          email: this.email,
          password: this.password,
        });
        localStorage.setItem("users", JSON.stringify(users));

        
        this.$router.push("/login");
      } else {
        this.error = "Te rog completează toate câmpurile.";
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
