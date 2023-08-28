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
          image: "/images/Example.jpg",
        },
        {
          id: 2,
          name: "Moonbeam Mist",
          description:
            "A refreshing mist infused with the essence of moonlight.",
          price: "$29.99",
          image: "/images/SingleSpray.jpg",
        },
        {
          id: 3,
          name: "Sunshine Betwixt",
          description: "A beam of sunlight, raging against your senses.",
          price: "$39.99",
          image: "/images/2Spray.jpg",
        },
        {
          id: 4,
          name: "Windy Woes",
          description: "Second wind. Pep in your step.",
          price: "$19.99",
          image: "/images/InclCandle.jpg",
        },
        {
          id: 5,
          name: "Earthy Meadow",
          description: "Earthy Meadows will bring you back to your roots.",
          price: "$29.99",
          image: "/images/AllProducts.jpg",
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
