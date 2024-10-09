<template>
  <div class="container mx-auto p-4">
    <section
      class="text-center py-12 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-white rounded-lg"
    >
      <h1 class="text-4xl font-bold">Profilul Meu</h1>
    </section>

    <section class="my-12 bg-gray-100 p-6 rounded-lg shadow-lg">
      <h2 class="text-2xl font-semibold">Informații Personale</h2>
      <p><strong>Nume:</strong> {{ user.name }}</p>
      <p><strong>Email:</strong> {{ user.email }}</p>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {},
    };
  },
  computed: {
    loggedInUser() {
      return this.$store.getters.loggedInUser;
    },
  },
  mounted() {
    this.loadUserData();
  },
  methods: {
    loadUserData() {
      this.user = this.loggedInUser; 
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 600px;
}
</style>
