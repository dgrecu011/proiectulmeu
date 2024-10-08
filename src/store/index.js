import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      cart: [],
    };
  },
  mutations: {
    addToCart(state, product) {
      state.cart.push(product);
    },
    removeFromCart(state, productId) {
      state.cart = state.cart.filter(item => item.id !== productId);
    },
  },
  getters: {
    cart(state) {
      return state.cart;
    },
  },
});

export default store;
