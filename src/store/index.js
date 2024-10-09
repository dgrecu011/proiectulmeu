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
    removeFromCart(state, { productId, selectedColor }) {
      state.cart = state.cart.filter(
        (item) => !(item.id === productId && item.selectedColor === selectedColor)
      );
    },
    removeAllFromCart(state) {
      state.cart = [];
    },
    updateQuantity(state, { productId, selectedColor, quantity }) {
      const item = state.cart.find(
        (item) => item.id === productId && item.selectedColor === selectedColor
      );
      if (item) {
        item.quantity = quantity;
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
    addToCartAction({ commit }, product) {
      commit("addToCart", product);
    },
    removeFromCartAction({ commit }, payload) {
      commit("removeFromCart", payload);
    },
    removeAllFromCartAction({ commit }) {
      commit("removeAllFromCart");
    },
    updateQuantityAction({ commit }, payload) {
      commit("updateQuantity", payload);
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
    totalPrice(state) {
      return state.cart.reduce(
        (total, item) => total + (item.discountPrice || item.price) * item.quantity,
        0
      );
    },
  },
});
