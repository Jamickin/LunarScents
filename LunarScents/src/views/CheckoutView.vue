<script>
export default {
  created() {
    this.scrollToPlaceOrderButton();
  },

  data() {
    return {
      orderPlaced: false,
      deliveryLocation: "",
      showDeliveryFee: false,
      selectedLocation: "",
    };
  },

  mounted() {
    this.isScrollingEnabled = false;
    this.retrieveCart();
    window.addEventListener(
      "resize",
      this.adjustContainerHeight
    );
    this.$nextTick(() => {
      this.adjustContainerHeight();
    });
  },

  beforeDestroy() {
    window.removeEventListener(
      "resize",
      this.adjustContainerHeight
    );
  },

  computed: {
    cart() {
      const cartItems = this.$store.state.cart;
      if (cartItems.length === 0) {
        return [];
      }
      const subtotal = cartItems.reduce(
        (total, product) =>
          total +
          parseFloat(product.price.replace("R", "")),
        0
      );

      return [...cartItems];
    },
    cartTotal() {
      const cartItems = this.$store.state.cart;
      if (cartItems.length === 0) {
        return 0;
      }
      return cartItems.reduce((total, product) => {
        return total + parseFloat(product.price.replace("R", ""));
      }, 0);
    },
    grandTotal() {
  if (isNaN(this.cartTotal)) {
    return "Please select a delivery location";
  } else {
    const deliveryFee = parseFloat(
      this.calculateDeliveryFee().replace("R", "")
    );
    return this.cartTotal + deliveryFee;
  }
},
  },

  watch: {
    cart: {
      handler() {
        this.adjustContainerHeight();
      },
      deep: true,
    },
  },

  methods: {
    calculateDeliveryFee() {
      const pretoriaThreshold = 800;
      const joburgThreshold = 1000;
      const deliveryFeePretoria = 80;
      const deliveryFeeJoburg = 100;

      if (this.selectedLocation === "Pretoria") {
        return this.cartTotal >= pretoriaThreshold
          ? "R0.00"
          : `R${deliveryFeePretoria.toFixed(2)}`;
      } else if (this.selectedLocation === "Joburg") {
        return this.cartTotal >= joburgThreshold
          ? "R0.00"
          : `R${deliveryFeeJoburg.toFixed(2)}`;
      } else {
        return "Please select a delivery location";
      }
    },
    clearCartAndAdjustContainer() {
      this.clearCart();
      this.$nextTick(() => {
        this.adjustContainerHeight();
      });
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
      const total = this.grandTotal; // Assuming grandTotal is the correct total
      this.$router.push({ name: "confirmation", query: { total } });
    },
    adjustContainerHeight() {
      this.$nextTick(() => {
        const container = this.$refs.container;
        if (container) {
          const screenHeight = window.innerHeight;
          const containerHeight =
            container.getBoundingClientRect().height;
          container.style.height =
            containerHeight > screenHeight
              ? "auto"
              : `${screenHeight}px`;
        }
      });
    },
    increaseQuantity(product) {
  console.log("Increase quantity called for product:", product);
  // Find the product in the cart and increase its quantity by 1
  const cartItem = this.$store.state.cart.find((item) => item.id === product.id);
  console.log("Found cart item:", cartItem);
  if (cartItem) {
    // Create a new item with the same properties as the original product
    const newCartItem = { ...product };
    // Add it to the cart
    this.$store.commit("addToCart", newCartItem);
    this.saveCart();
    console.log("Updated cart item:", cartItem);
  }
},
  },
};
</script>

<template>
  <div class="container mx-auto py-10" ref="container">
    <h1 class="text-3xl font-bold mb-6">Checkout</h1>
    <div
      v-if="cart.length === 0"
      class="p-4 bg-gray-100 text-gray-500 rounded">
      <p>Your cart is empty. Start shopping!</p>
      <p>
        Note that any orders of R800 and above qualify
        for free delivery!
      </p>
    </div>

    <div v-else>
      <div
        v-for="product in cart"
        :key="product.id"
        class="bg-Glass rounded-lg shadow-md p-8 mt-4 ">
        <div class="grid grid-cols-2 justify-center place-items-center">
          <h2 class="text-lg font-bold">
            {{ product.name }}
          </h2>
          <p class="text-gray-500 text-sm">
            {{ product.description }}
          </p>
          <p class="mt-2 text-primary font-bold text-lg">
            {{ product.price }}
          </p>
          <img
    v-if="product.name !== 'Delivery Fee'"
    :src="product.image"
    :alt="product.name"
    class="mx-auto rounded-lg max-h-44"/>
        </div>
        <button
          class="mt-2 bg-[#475569] text-white py-2 px-4 rounded hover:opacity-90 text-sm"
          @click="removeFromCart(product)">
          Remove
        </button>
        <button
    class="mt-2 bg-[#475569] text-white py-2 px-4 rounded hover:opacity-90 text-sm"
    @click="increaseQuantity(product)"
  >
    +1
  </button>
      </div>
      <div class="my-4">      <label for="deliveryLocation">Delivery Location:</label>
<select id="deliveryLocation" v-model="selectedLocation" class="rounded-lg p-2 border">
  <option value="">Select a location</option>
  <option value="Pretoria">Pretoria</option>
  <option value="Joburg">Joburg</option>
</select></div>

<div class="flex gap-4">      
  <p class="text-slate-500 font bolder text-xl">Cart Total: R{{ cartTotal }}.00</p>
  <p class="text-slate-500 font bolder text-xl">Delivery Fee: {{ calculateDeliveryFee() }}</p>
  <p class="text-slate-500 font bolder text-xl">Grand Total: R{{ grandTotal }}.00</p>
     </div>
 
<button
  class="mt-4 bg-[#475569] text-white py-2 px-4 mr-4 rounded hover:bg-primary-dark text-lg"
  @click="clearCartAndAdjustContainer">
  Clear Cart
</button>
<button
  v-if="!orderPlaced && selectedLocation"
  id="place-order-button"
  class="mt-4 bg-[#475569] text-white py-2 px-4 rounded hover:bg-primary-dark text-lg"
  @click="placeOrderAndNavigate">
  Place Order
</button>
    </div>
  </div>
</template>

<style scoped>
  .container {
    max-width: 960px;
    margin: 0 auto;
  }
</style>
