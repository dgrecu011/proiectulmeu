<template>
  <div class="container mx-auto p-4">
    <div v-if="product" class="flex flex-col md:flex-row">
      <div class="flex-1">
        <img
          :src="product.image"
          :alt="product.name"
          class="w-full h-auto rounded-lg shadow-lg mb-4"
        />
      </div>
      <div class="flex-1 md:pl-8">
        <h1 class="text-3xl font-bold text-gray-800">{{ product.name }}</h1>
        <p class="mt-2 text-lg text-gray-600">{{ product.description }}</p>
        <p class="mt-4 text-xl font-semibold text-gray-900">
          Preț:
          <span
            v-if="product.discountPrice"
            class="line-through text-gray-500"
            >{{ formatPrice(product.price) }}</span
          >
        </p>
        <p class="mt-2 text-2xl font-bold text-red-600">
          {{
            product.discountPrice
              ? formatPrice(product.discountPrice)
              : formatPrice(product.price)
          }}
        </p>

        <div class="mt-6" v-if="product.colors && product.colors.length">
          <h2 class="text-xl font-semibold text-gray-800">Alege o culoare:</h2>
          <div class="flex mt-2">
            <template v-for="color in product.colors" :key="color">
              <button
                class="w-8 h-8 rounded-full mr-2 focus:outline-none focus:ring-2 focus:ring-offset-2"
                :style="{ backgroundColor: color.toLowerCase() }"
                :class="{
                  'border border-black':
                    color.toLowerCase() === 'white' ||
                    color.toLowerCase() === 'lightgray',
                  'ring ring-blue-500': selectedColor === color,
                }"
                @click="selectColor(color)"
              ></button>
            </template>
          </div>
        </div>

        <button
          @click="addToCart"
          class="mt-6 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none"
        >
          Adaugă în coș
        </button>
        <div v-if="addedToCart" class="mt-2 text-green-600">
          ✔ Produsul a fost adăugat în coș!
        </div>
      </div>
    </div>

    
    <div v-else class="text-center">
      <p>Se încarcă produsul...</p>
    </div>

  
    <div v-if="product" class="mt-8">
      <h2 class="text-2xl font-bold text-gray-800">Specificații</h2>
      <ul class="list-disc ml-5 mt-2">
        <li
          v-for="(spec, index) in product.specifications"
          :key="index"
          class="text-gray-600"
        >
          {{ spec }}
        </li>
      </ul>
    </div>

    
    <div v-if="similarProducts.length" class="mt-8">
      <h2 class="text-2xl font-bold text-gray-800">Produse similare</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="similarProduct in similarProducts"
          :key="similarProduct.id"
          class="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition-shadow duration-300"
        >
          <img
            :src="similarProduct.image"
            :alt="similarProduct.name"
            class="w-full h-48 object-contain rounded-t-lg"
          />
          <h3 class="text-xl font-semibold mt-4">{{ similarProduct.name }}</h3>
          <p class="text-lg font-bold mt-2 text-indigo-600">
            {{ formatPrice(similarProduct.price) }} €
          </p>
          <router-link
            :to="`/product/${similarProduct.id}`"
            class="text-blue-600 mt-2 inline-block"
            >Vezi Detalii</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      product: null,
      selectedColor: "",
      addedToCart: false,
      similarProducts: [],
    };
  },
  methods: {
    ...mapActions(["addToCartAction"]),
    formatPrice(price) {
      return new Intl.NumberFormat("ro-RO", {
        style: "currency",
        currency: "RON",
      }).format(price);
    },
    selectColor(color) {
      this.selectedColor = color.toLowerCase();
    },
    addToCart() {
      if (!this.selectedColor) {
        alert(
          "Te rog să selectezi o culoare înainte de a adăuga produsul în coș."
        );
        return;
      }
      const productWithColor = {
        ...this.product,
        selectedColor: this.selectedColor.toLowerCase(),
      };

      const existingProduct = this.$store.getters.cart.find(
        (item) =>
          item.id === productWithColor.id &&
          item.selectedColor.toLowerCase() === productWithColor.selectedColor
      );

      if (existingProduct) {
        this.$store.dispatch("updateQuantityAction", {
          productId: existingProduct.id,
          selectedColor: existingProduct.selectedColor,
          quantity: existingProduct.quantity + 1,
        });
      } else {
        this.addToCartAction(productWithColor);
      }

      this.addedToCart = true;
      setTimeout(() => {
        this.addedToCart = false;
      }, 3000);
    },
    fetchProduct() {
      const productId = this.$route.params.id;
      axios
        .get(`http://localhost:3000/products/${productId}`)
        .then((response) => {
          this.product = response.data;
          this.selectedColor = this.product.colors[0].toLowerCase();
          this.fetchSimilarProducts();
        })
        .catch((error) => {
          console.error("Eroare la obținerea produsului:", error);
        });
    },
    fetchSimilarProducts() {
      axios
        .get(`http://localhost:3000/products?category=${this.product.category}`)
        .then((response) => {
          this.similarProducts = response.data.filter(
            (item) => item.id !== this.product.id
          );
        })
        .catch((error) => {
          console.error("Eroare la obținerea produselor similare:", error);
        });
    },
  },
  created() {
    this.fetchProduct();
  },
};
</script>

<style scoped>

</style>
