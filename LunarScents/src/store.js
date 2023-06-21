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
          image: "/images/StardustElixir.jpg",
        },
        {
          id: 2,
          name: "Moonbeam Mist",
          description:
            "A refreshing mist infused with the essence of moonlight.",
          price: "$29.99",
          image: "/images/moonbeam-mist.jpg",
        },
        // Add more products as needed
      ],
      cart: [],
    };
  },
  mutations: {
    addToCart(state, product) {
      state.cart.push(product);
    },
    removeFromCart(state, product) {
      const index = state.cart.findIndex((item) => item.id === product.id);
      if (index !== -1) {
        state.cart.splice(index, 1);
      }
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});
