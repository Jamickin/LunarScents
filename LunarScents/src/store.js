import {createStore} from "vuex";

export default createStore({
  state() {
    return {
      products: [],
      cart: JSON.parse(localStorage.getItem("cart")) || [],
    };
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    addToCart(state, product) {
      state.cart = [...state.cart, product];
      localStorage.setItem(
        "cart",
        JSON.stringify(state.cart)
      );
    },

    setCart(state, cart) {
      state.cart = cart;
    },

    removeFromCart(state, product) {
      const index = state.cart.findIndex(
        (item) => item.id === product.id
      );
      if (index !== -1) {
        state.cart.splice(index, 1);
        localStorage.setItem(
          "cart",
          JSON.stringify(state.cart)
        );
      }
    },
    clearCart(state) {
      state.cart = [];
      localStorage.removeItem("cart");
    },
    checkout(state) {
      state.cart = [];
    },
  },
  actions: {
    clearCart({ commit }) {
      commit("clearCart");
    },
    setProducts({commit}, products) {
      commit('setProducts', products);
    },
  },
  getters: {
    cartItemCount(state) {
      return state.cart.length;
    },
    cartTotalPrice(state) {
      return state.cart.reduce(
        (total, product) =>
          total + parseFloat(product.price),
        0
      );
    },
  },
});
