import { createStore } from "vuex";

export default createStore({
  state: {
    cart: [],
    loggedInUser: JSON.parse(localStorage.getItem("loggedInUser")) || null,
  },
  mutations: {
    setLoggedInUser(state, user) {
      state.loggedInUser = user;
    },
    logoutUser(state) {
      state.loggedInUser = null;
      localStorage.removeItem("loggedInUser");
    },
    addToCart(state, product) {
      const existingProduct = state.cart.find(
        (item) =>
          item.id === product.id && item.selectedColor === product.selectedColor
      );
      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }
    },
  },
  actions: {
    loginUser({ commit }, user) {
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      commit("setLoggedInUser", user);
    },
    logoutUserAction({ commit }) {
      commit("logoutUser");
    },
  },
  getters: {
    cart(state) {
      return state.cart;
    },
    loggedInUser(state) {
      return state.loggedInUser;
    },
    isLoggedIn(state) {
      return !!state.loggedInUser;
    },
  },
});
