import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      products: [
        {
          id: 1,
          name: "Temple Tonic",
          description:
            "An enchanting blend of celestial florals and musk.",
          price: "R50.00",
          image: "../src/assets/images/TonicStore.webp",
        },
        {
          id: 2,
          name: "Enchanted Forest Spray",
          description:
            "A refreshing mist infused with the essence of moonlight.",
          price: "R80.00",
          image: "../src/assets/images/SprayStore.webp",
        },
        {
          id: 3,
          name: "Moonlit Blush Blend",
          description:
            "A beam of sunlight, raging against your senses.",
          price: "R120.00",
          image: "../src/assets/images/RollerStore.webp",
        },
      ],
      // galleryItems: [
      //   {
      //     id: 1,
      //     name: "Gallery Item 1",
      //     image: "../src/assets/images/gallery/_MGL0002.jpg",
      //   },
      //   {
      //     id: 2,
      //     name: "Gallery Item 2",
      //     image: "../src/assets/images/gallery/_MGL0005.jpg",
      //   },
      //   {
      //     id: 3,
      //     name: "Gallery Item 3",
      //     image: "../src/assets/images/gallery/_MGL0009.jpg",
      //   },
      //   {
      //     id: 4,
      //     name: "Gallery Item 4",
      //     image: "../src/assets/images/gallery/_MGL0010.jpg",
      //   },
      //   {
      //     id: 5,
      //     name: "Gallery Item 5",
      //     image: "../src/assets/images/gallery/_MGL0017.jpg",
      //   },
      //   {
      //     id: 6,
      //     name: "Gallery Item 6",
      //     image: "../src/assets/images/gallery/_MGL0020.jpg",
      //   },
      //   {
      //     id: 7,
      //     name: "Gallery Item 7",
      //     image: "../src/assets/images/gallery/_MGL0034.jpg",
      //   },
      //   {
      //     id: 8,
      //     name: "Gallery Item 8",
      //     image: "../src/assets/images/gallery/_MGL0039.jpg",
      //   },
      //   {
      //     id: 9,
      //     name: "Gallery Item 9",
      //     image: "../src/assets/images/gallery/_MGL0046.jpg",
      //   },
      //   {
      //     id: 10,
      //     name: "Gallery Item 10",
      //     image: "../src/assets/images/gallery/_MGL0056.jpg",
      //   },
      //   {
      //     id: 11,
      //     name: "Gallery Item 11",
      //     image: "../src/assets/images/gallery/_MGL0067.jpg",
      //   },
      //   {
      //     id: 12,
      //     name: "Gallery Item 12",
      //     image: "../src/assets/images/gallery/_MGL0075.jpg",
      //   },
      //   {
      //     id: 13,
      //     name: "Gallery Item 13",
      //     image: "../src/assets/images/gallery/_MGL0085.jpg",
      //   },
      //   {
      //     id: 14,
      //     name: "Gallery Item 14",
      //     image: "../src/assets/images/gallery/_MGL0094.jpg",
      //   },
      //   {
      //     id: 15,
      //     name: "Gallery Item 15",
      //     image: "../src/assets/images/gallery/_MGL0103.jpg",
      //   },
      //   {
      //     id: 16,
      //     name: "Gallery Item 16",
      //     image: "../src/assets/images/gallery/_MGL0123.jpg",
      //   },
      //   {
      //     id: 17,
      //     name: "Gallery Item 17",
      //     image: "../src/assets/images/gallery/_MGL0126.jpg",
      //   },
      //   {
      //     id: 18,
      //     name: "Gallery Item 18",
      //     image: "../src/assets/images/gallery/_MGL0130.jpg",
      //   },
      //   {
      //     id: 19,
      //     name: "Gallery Item 19",
      //     image: "../src/assets/images/gallery/_MGL0149.jpg",
      //   },
      //   {
      //     id: 20,
      //     name: "Gallery Item 20",
      //     image: "../src/assets/images/gallery/_MGL0154.jpg",
      //   },
      //   {
      //     id: 21,
      //     name: "Gallery Item 21",
      //     image: "../src/assets/images/gallery/_MGL0160.jpg",
      //   },
      //   {
      //     id: 22,
      //     name: "Gallery Item 22",
      //     image: "../src/assets/images/gallery/_MGL0170.jpg",
      //   },
      //   {
      //     id: 23,
      //     name: "Gallery Item 23",
      //     image: "../src/assets/images/gallery/_MGL0175.jpg",
      //   },
      //   {
      //     id: 24,
      //     name: "Gallery Item 24",
      //     image: "../src/assets/images/gallery/_MGL0179.jpg",
      //   },
      //   {
      //     id: 25,
      //     name: "Gallery Item 25",
      //     image: "../src/assets/images/gallery/_MGL0184.jpg",
      //   },
      //   {
      //     id: 26,
      //     name: "Gallery Item 26",
      //     image: "../src/assets/images/gallery/_MGL0185.jpg",
      //   },
      //   {
      //     id: 27,
      //     name: "Gallery Item 27",
      //     image: "../src/assets/images/gallery/_MGL0189.jpg",
      //   },
      //   {
      //     id: 28,
      //     name: "Gallery Item 28",
      //     image: "../src/assets/images/gallery/_MGL0195.jpg",
      //   },
      //   {
      //     id: 29,
      //     name: "Gallery Item 29",
      //     image: "../src/assets/images/gallery/_MGL0198.jpg",
      //   },
      //   {
      //     id: 30,
      //     name: "Gallery Item 30",
      //     image: "../src/assets/images/gallery/_MGL0199.jpg",
      //   },
      //   {
      //     id: 31,
      //     name: "Gallery Item 31",
      //     image: "../src/assets/images/gallery/_MGL0200.jpg",
      //   },
      //   {
      //     id: 32,
      //     name: "Gallery Item 32",
      //     image: "../src/assets/images/gallery/_MGL0201.jpg",
      //   },
      //   {
      //     id: 33,
      //     name: "Gallery Item 33",
      //     image: "../src/assets/images/gallery/_MGL0203.jpg",
      //   },
      //   {
      //     id: 34,
      //     name: "Gallery Item 34",
      //     image: "../src/assets/images/gallery/_MGL0205.jpg",
      //   },
      //   {
      //     id: 35,
      //     name: "Gallery Item 35",
      //     image: "../src/assets/images/gallery/_MGL0210.jpg",
      //   },
      //   {
      //     id: 36,
      //     name: "Gallery Item 36",
      //     image: "../src/assets/images/gallery/_MGL0235.jpg",
      //   },
      //   {
      //     id: 37,
      //     name: "Gallery Item 37",
      //     image: "../src/assets/images/gallery/_MGL0260.jpg",
      //   },
      //   {
      //     id: 38,
      //     name: "Gallery Item 38",
      //     image: "../src/assets/images/gallery/_MGL0290.jpg",
      //   },
      //   {
      //     id: 39,
      //     name: "Gallery Item 39",
      //     image: "../src/assets/images/gallery/_MGL0295.jpg",
      //   },
      //   {
      //     id: 40,
      //     name: "Gallery Item 40",
      //     image: "../src/assets/images/gallery/_MGL0300.jpg",
      //   },
      //   {
      //     id: 41,
      //     name: "Gallery Item 41",
      //     image: "../src/assets/images/gallery/_MGL0316.jpg",
      //   },
      // ],
      cart: JSON.parse(localStorage.getItem("cart")) || [],
    };
  },
  mutations: {
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
