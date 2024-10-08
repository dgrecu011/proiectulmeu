// src/store/index.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    cart: [],
  },
  mutations: {
    addToCart(state, product) {
      const existingProduct = state.cart.find(item => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart(state, productId) {
      const index = state.cart.findIndex(item => item.id === productId);
      if (index !== -1) {
        state.cart.splice(index, 1);
      }
    },
    updateQuantity(state, { productId, quantity }) {
      const product = state.cart.find(item => item.id === productId);
      if (product) {
        product.quantity = quantity;
      }
    },
  },
  actions: {
    addToCartAction({ commit }, product) {
      commit('addToCart', product);
    },
    removeFromCartAction({ commit }, productId) {
      commit('removeFromCart', productId);
    },
    updateQuantityAction({ commit }, payload) {
      commit('updateQuantity', payload);
    },
  },
  getters: {
    cart(state) {
      return state.cart;
    },
    totalPrice(state) {
      return state.cart.reduce((total, item) => total + (item.discountPrice || item.price) * item.quantity, 0);
    },
  },
});
