import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      products: [
        {
          id: 1,
          name: "Stardust Elixir",
          description: "An enchanting blend of celestial florals and musk.",
          price: "$49.99",
          image:
            "https://images.unsplash.com/photo-1463438690606-f6778b8c1d10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
        },
        {
          id: 2,
          name: "Moonbeam Mist",
          description:
            "A refreshing mist infused with the essence of moonlight.",
          price: "$29.99",
          image:
            "https://images.unsplash.com/photo-1558470598-a5dda9640f68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80",
        },
        {
          id: 3,
          name: "Sunshine Betwixt",
          description: "A beam of sunlight, raging against your senses.",
          price: "$39.99",
          image:
            "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
        },
      ],
      cart: JSON.parse(localStorage.getItem("cart")) || [],
    };
  },

  mutations: {
    addToCart(state, product) {
      state.cart = [...state.cart, product];
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    setCart(state, cart) {
      state.cart = cart;
    },

    removeFromCart(state, product) {
      const index = state.cart.findIndex((item) => item.id === product.id);
      if (index !== -1) {
        state.cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(state.cart));
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
  },

  getters: {
    cartItemCount(state) {
      return state.cart.length;
    },
    cartTotalPrice(state) {
      return state.cart.reduce(
        (total, product) => total + parseFloat(product.price),
        0
      );
    },
  },
});
