<template>
  <div class="container mx-auto px-4 lg:px-0 py-24" ref="container">
    <h1 class="text-3xl font-bold mb-6">Checkout</h1>
    <div
        v-if="cart.length === 0"
        class="p-4 bg-gray-100 text-gray-500 rounded"
    >
      <p>Your cart is empty. Start shopping!</p>
      <p>
        Note that delivery is free when orders are above R800 in Pretoria and R1000 in Joburg respectively!
      </p>
    </div>

    <div v-else style="min-height: 80vh">

      <template v-for="(product, productId) in groupedCart" :key="productId">
        <div class="bg-Glass rounded-lg transition-all duration-100 hover:scale-105 shadow-md p-8 mt-4">
          <CheckoutBox
            :name="product[0].name"
            :image="product[0].image"
            :price="product[0].price"
            :quantity="product.length"
            :description="product[0].description"
            @removeFromCart="removeFromCart(product[0])"
            @increaseQuantity="increaseQuantity(product[0])"
          ></CheckoutBox>
        </div>
      </template>
        <div class="flex sm:flex-row flex-col gap-4 bg-Glass p-8 rounded-2xl place-items-center justify-items-center">
          <p class="text-slate-900 font-bold text-xl">Cart Total: R{{ cartTotal }}.00</p>
          <p class="text-slate-900 font-bold text-xl">Delivery Fee: R0.00</p>
          <p class="text-slate-900 font-bold text-xl">Grand Total: R{{ grandTotal }}.00</p>
        </div>
      <button
          class="mt-4 bg-[#475569] text-white py-2 px-4 mr-4 rounded hover:bg-primary-dark text-lg"
          @click="clearCart"
      >
        Clear Cart
      </button>
      <button
          v-if="!orderPlaced"
          id="place-order-button"
          class="mt-4 bg-[#475569] text-white py-2 px-4 rounded hover:bg-primary-dark text-lg"
          @click="placeOrderAndNavigate"
      >
        Place Order
      </button> 
    </div>
  </div>
</template>

<script>
import CheckoutBox from "@/components/CheckoutBox.vue";

export default {
  name: 'CheckoutView',
  components: {CheckoutBox},

  data() {
    return {
      orderPlaced: false,
    };
  },

  computed: {
    cart() {
      const cartItems = this.$store.state.cart;
      if (cartItems.length === 0) {
        return [];
      }
      return [...cartItems];
    },

    groupedCart() {
      const cartItems = this.$store.state.cart;
      if (cartItems.length === 0) {
        return {};
      }
      const grouped = {};
      cartItems.forEach(product => {
        if (!grouped[product.id]) {
          grouped[product.id] = [product];
        } else {
          grouped[product.id].push(product);
        }
      });
      return grouped;
    },

    cartTotal() {
      const cartItems = this.$store.state.cart;
      if (cartItems.length === 0) {
        return 0;
      }
      return cartItems.reduce((total, product) => {
        return total + product.price
      }, 0);
    },

    grandTotal() {    
        // return this.cartTotal + 70.00;
        return this.cartTotal;
      }
    },

  methods: {
    clearCart() {
      this.clearCart();
    },

    retrieveCart() {
      const storedCart = localStorage.getItem("cart");
      if (storedCart) {
        this.$store.commit("setCart", JSON.parse(storedCart));
      }
    },

    saveCart() {
      const cart = JSON.stringify(this.cart);
      localStorage.setItem("cart", cart);
    },

    removeFromCart(product) {
      this.$store.commit("removeFromCart", product);
      this.saveCart();
    },

    clearCart() {
      this.$store.commit("clearCart");
      this.saveCart();
      this.orderPlaced = false;
    },

    scrollToPlaceOrderButton() {
      this.$nextTick(() => {
        const orderButton = document.getElementById("place-order-button");
        if (orderButton) {
          orderButton.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    },

    placeOrderAndNavigate() {
      const total = this.grandTotal;
      this.$router.push({name: "confirmation", query: {total}});
    },

    increaseQuantity(product) {
      const cartItem = this.$store.state.cart.find(
          (item) => item.id === product.id
      );
      if (cartItem) {
        const newCartItem = {...product};
        this.$store.commit("addToCart", newCartItem);
        this.saveCart();
      }
    },
  },

  mounted() {
    this.isScrollingEnabled = false;
    this.retrieveCart();
  },

  created() {
    this.scrollToPlaceOrderButton();
  },
};
</script>

<style scoped>
.container {
  max-width: 960px;
  margin: 0 auto;
}
</style>
