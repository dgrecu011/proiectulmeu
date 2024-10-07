import { createStore } from "vuex";

const store = createStore({
  state: {
    cartItems: [],
  },
  mutations: {
    addToCart(state, product) {
      const existingProduct = state.cartItems.find(
        (item) => item.id === product.id
      );
      if (existingProduct) {
        // Optional: Update quantity or similar logic
      } else {
        state.cartItems.push(product);
      }
    },
    removeFromCart(state, productId) {
      state.cartItems = state.cartItems.filter((item) => item.id !== productId);
    },
    clearCart(state) {
      state.cartItems = [];
    },
  },
  actions: {
    addToCart({ commit }, product) {
      commit("addToCart", product);
    },
    removeFromCart({ commit }, productId) {
      commit("removeFromCart", productId);
    },
    clearCart({ commit }) {
      commit("clearCart");
    },
  },
  getters: {
    cartItems: (state) => state.cartItems,
    cartCount: (state) => state.cartItems.length,
  },
});

export default store;
