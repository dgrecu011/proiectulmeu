import { createStore } from 'vuex';

export default createStore({
  state: {
    cart: [],
  },
  mutations: {
    addToCart(state, product) {
      // Check if the product already exists in the cart
      const existingProduct = state.cart.find(
        item => item.id === product.id && item.selectedColor === product.selectedColor
      );

      if (existingProduct) {
        existingProduct.quantity++; // Increment the quantity if it already exists
      } else {
        // Add the product to the cart with an initial quantity of 1
        state.cart.push({ ...product, quantity: 1 });
      }
    },
    
    removeFromCart(state, { productId, selectedColor }) {
      const index = state.cart.findIndex(
        item => item.id === productId && item.selectedColor === selectedColor
      );

      if (index !== -1) {
        state.cart.splice(index, 1); // Remove the product if found
      }
    },
    
    updateQuantity(state, { productId, selectedColor, quantity }) {
      const product = state.cart.find(
        item => item.id === productId && item.selectedColor === selectedColor
      );

      if (product) {
        product.quantity = quantity; // Update the quantity
      }
    },
    
    removeAllFromCart(state) {
      state.cart = []; // Empty the cart
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
      return state.cart; // Return the cart products
    },
    totalPrice(state) {
      return state.cart.reduce((total, item) => {
        return total + (item.discountPrice || item.price) * item.quantity;
      }, 0); // Calculate the total price
    },
  },
});
