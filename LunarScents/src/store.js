import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      products: [
        {
          id: 1,
          name: "Temple Tonic",
          description: "An enchanting blend of celestial florals and musk.",
          price: "R50.00",
          image: "../src/assets/images/TonicStore.jpg",
        },
        {
          id: 2,
          name: "Enchanted Forest Spray",
          description:
            "A refreshing mist infused with the essence of moonlight.",
          price: "R80.00",
          image: "../src/assets/images/SprayStore.jpg",
        },
        {
          id: 3,
          name: "Moonlit Blush Blend",
          description: "A beam of sunlight, raging against your senses.",
          price: "R120.00",
          image: "../src/assets/images/RollerStore.jpg",
        },

        // {
        //   id: 4,
        //   name: "Build-A-Box",
        //   description:
        //     "Add all your favourite merch to one parcel and receive a discount!",
        //   price: "R450.00",
        //   image: "../src/assets/images/Box.jpg",
        // },
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
