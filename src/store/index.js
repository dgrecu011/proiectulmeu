import { createStore } from 'vuex';

export default createStore({
  state: {
    cart: [],
  },
  mutations: {
    ADD_TO_CART(state, product) {
      const itemInCart = state.cart.find(item => item.id === product.id);
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }
    },
    REMOVE_FROM_CART(state, productId) {
      state.cart = state.cart.filter(item => item.id !== productId);
    },
    UPDATE_QUANTITY(state, { productId, quantity }) {
      const item = state.cart.find(item => item.id === productId);
      if (item) {
        item.quantity = quantity;
      }
    }
  },
  actions: {
    addToCartAction({ commit }, product) {
      commit("ADD_TO_CART", product);
    },
    removeFromCartAction({ commit }, productId) {
      commit("REMOVE_FROM_CART", productId);
    },
    updateQuantityAction({ commit }, { productId, quantity }) {
      commit("UPDATE_QUANTITY", { productId, quantity });
    }
  },
  getters: {
    cart(state) {
      return state.cart;
    },
    totalPrice(state) {
      return state.cart.reduce((total, item) => {
        const price = item.discountPrice || item.price;
        return total + price * item.quantity;
      }, 0);
    }
  }
});
