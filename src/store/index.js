// src/store/index.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    cart: [],
  },
  mutations: {
    // Add product to the cart
    addToCart(state, product) {
      // Check for existing product with the same ID and selected color
      const existingProduct = state.cart.find(
        item => item.id === product.id && item.selectedColor === product.selectedColor
      );
      
      if (existingProduct) {
        existingProduct.quantity++; // Increment quantity if exists
      } else {
        // Add new product to the cart with a quantity of 1
        state.cart.push({ ...product, quantity: 1 });
      }
    },
    
    // Remove a product from the cart
    removeFromCart(state, { productId, selectedColor }) {
      const index = state.cart.findIndex(
        item => item.id === productId && item.selectedColor === selectedColor
      );
      
      if (index !== -1) {
        state.cart.splice(index, 1); // Remove item if found
      }
    },
    
    // Update quantity of a product in the cart
    updateQuantity(state, { productId, selectedColor, quantity }) {
      const product = state.cart.find(
        item => item.id === productId && item.selectedColor === selectedColor
      );
      
      if (product) {
        product.quantity = quantity; // Update quantity
      }
    },
    
    // Remove all products from the cart
    removeAllFromCart(state) {
      state.cart = []; // Clear the cart
    },
  },
  actions: {
    addToCartAction({ commit }, product) {
      commit('addToCart', product);
    },
    removeFromCartAction({ commit }, { productId, selectedColor }) {
      commit('removeFromCart', { productId, selectedColor });
    },
    updateQuantityAction({ commit }, payload) {
      commit('updateQuantity', payload);
    },
    removeAllFromCartAction({ commit }) {
      commit('removeAllFromCart');
    },
  },
  getters: {
    cart(state) {
      return state.cart; // Return the cart items
    },
    totalPrice(state) {
      return state.cart.reduce((total, item) => {
        return total + (item.discountPrice || item.price) * item.quantity;
      }, 0); // Calculate total price
    },
  },
});
