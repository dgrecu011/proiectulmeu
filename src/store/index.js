import { createStore } from 'vuex';

export default createStore({
  state: {
    cart: [],
  },
  mutations: {
    // Add product to the cart
    addToCart(state, product) {
      // Verificăm dacă produsul există deja în coș
      const existingProduct = state.cart.find(
        item => item.id === product.id && item.selectedColor === product.selectedColor
      );

      if (existingProduct) {
        existingProduct.quantity++; // Incrementăm cantitatea dacă există deja
      } else {
        // Adăugăm produsul în coș cu o cantitate de 1
        state.cart.push({ ...product, quantity: 1 });
      }
    },
    
    // Remove a product from the cart
    removeFromCart(state, { productId, selectedColor }) {
      const index = state.cart.findIndex(
        item => item.id === productId && item.selectedColor === selectedColor
      );

      if (index !== -1) {
        state.cart.splice(index, 1); // Îndepărtăm produsul dacă este găsit
      }
    },
    
    // Update quantity of a product in the cart
    updateQuantity(state, { productId, selectedColor, quantity }) {
      const product = state.cart.find(
        item => item.id === productId && item.selectedColor === selectedColor
      );

      if (product) {
        product.quantity = quantity; // Actualizăm cantitatea
      }
    },
    
    // Remove all products from the cart
    removeAllFromCart(state) {
      state.cart = []; // Golim coșul
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
      return state.cart; // Returnăm produsele din coș
    },
    totalPrice(state) {
      return state.cart.reduce((total, item) => {
        return total + (item.discountPrice || item.price) * item.quantity;
      }, 0); // Calculăm prețul total
    },
  },
});
