<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Coș de Cumpărături</h1>
    <div v-if="cart.length === 0">
      <p>Coșul tău este gol.</p>
      <router-link to="/" class="text-blue-500">Înapoi la produse</router-link>
    </div>
    <div v-else>
      <div
        v-for="item in cart"
        :key="item.id"
        class="border p-4 mb-2 rounded-lg"
      >
        <h2 class="text-lg font-semibold">{{ item.name }}</h2>
        <p>{{ item.description }}</p>
        <p class="text-xl font-bold">{{ item.price }} RON</p>
        <button
          @click="removeFromCart(item.id)"
          class="bg-red-500 text-white px-4 py-2 rounded mt-2"
        >
          Șterge
        </button>
      </div>
      <router-link to="/" class="text-blue-500">Înapoi la produse</router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["cart"]),
  },
  methods: {
    removeFromCart(productId) {
      this.$store.commit("removeFromCart", productId);
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
