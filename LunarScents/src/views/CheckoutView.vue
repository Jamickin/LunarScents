<template>
  <div class="container mx-auto px-4 lg:px-0 py-24" ref="container">
    <h1 class="text-3xl font-bold mb-6">Checkout</h1>
    <div
        v-if="cart.length === 0"
        class="p-4 mt-40 bg-neutral-100 text-gray-500 rounded-xl"
    >
      <p>Your cart is empty. Start shopping!</p>
      <p>
        Note that delivery is free when orders are above R800 in Pretoria and R1000 in Joburg respectively!
      </p>
    </div>

    <div v-else style="min-height: 80vh">

      <template v-for="(product) in groupedCart" :key="productId">
        <div 
         class="bg-Glass p-8 mt-4">
          <CheckoutBox
            :name="product[0].name"
            :image="product[0].image"
            :price="product[0].price"
            :quantity="product.length"
            :description="product[0].description"
            @removeFromCart="removeFromCart(product[0])"
            @increaseQuantity="increaseQuantity(product[0])"
            @removeAllOfType="removeAllOfType(product[0])"
          ></CheckoutBox>
        </div>
      </template>
        <div class="flex sm:flex-row flex-col gap-4 bg-Glass p-8 rounded-b-xl place-items-center justify-items-center">
          <p class="text-slate-900 font-bold text-xl">Cart Total: <span class="text-TertiaryHL">R{{ cartTotal }}.00</span></p>
          <p class="text-slate-900 font-bold text-xl">Delivery Fee: <span class="text-TertiaryHL">R{{ deliveryFee }}.00</span></p>
          <p class="text-slate-900 font-bold text-xl">Grand Total: <span class="text-TertiaryHL">R{{ grandTotal }}.00</span></p>
        <select v-model="deliveryOption" class="border p-2 bg-Glass border-none">
          <option value="delivery">Delivery</option>
          <option value="pickup">Pickup</option>
        </select>
        </div>
        <p class="font-bold" v-if="deliveryOption != 'delivery'">You've opted for Pick-Up. Delivery will not be charged, however you are responsible for the acquisition of said products!</p>
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
          @click="toggleModal()"
      >
        Place Order
      </button> 
    </div>
  </div>
        <form
      v-if="cart.length > 0"
        ref="paymentForm"
        action="https://www.payfast.co.za​/eng/process" 
        method="post">
        <input type="hidden" name="merchant_id" value="23365764">
        <input type="hidden" name="merchant_key" value="6rsiv5tziqj24">
        <input type="hidden" name="return_url" value="https://www.lunarscents.co.za/store">
        <input type="hidden" name="cancel_url" value="https://www.lunarscents.co.za/checkout">
        <input type="hidden" name="amount" :value="grandTotal">
        <input type="hidden" name="item_name" :value="productCodes">
        <input type="hidden" name="custom_str1" :value="`Cell Number: ${userInfo.number}`">
        <input type="hidden" name="custom_str2" :value="`Delivery Fee: R${deliveryFee}.00`">
        <input type="hidden" name="custom_str3" :value="`Extra Notes: ${userInfo.notes}`">
        <input type="hidden" name="name_first" :value="userInfo.name">
        <input type="hidden" name="name_last" :value="userInfo.surname">
        <input type="hidden" name="email_address" :value="userInfo.email">
        <button
      type="submit"
      class="animate-pulse bg-primary font-extrabold text-green-500 py-2 px-4 rounded hover:bg-primary-dark"
      style="display: none;"
    >
    </button>      
  </form>
  <div
    v-if="infoModalOpen"
    class="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center">
    <div class="bg-white rounded-lg p-6 w-96">
      <h2 class="text-2xl font-semibold mb-4">
        Enter Your Information
      </h2>
      <div class="mb-4">
        <label for="name" class="block text-base mb-1 text-gray-700">Name:</label>
        <input
          id="name"
          v-model="userInfo.name"
          type="text"
          placeholder="John..."
          class="w-full border rounded px-2 py-1"
          required />
        <span v-if="!userInfo.name" class="text-red-600">Name is required</span>
      </div>
      <div class="mb-4">
        <label for="surname" class="block text-base mb-1 text-gray-700">Surname:</label>
        <input
          v-model="userInfo.surname"
          type="text"
          placeholder="Doe..."
          class="w-full border rounded px-2 py-1" 
          required/>
          <span v-if="!userInfo.surname" class="text-red-600">Surname is required</span>
      </div>
      <div class="mb-4">
        <label for="number" class="block text-base mb-1 text-gray-700">Cell-Number:</label>
        <input
          v-model="userInfo.number"
          type="integer"
          placeholder="0123456789..."
          class="w-full border rounded px-2 py-1" 
          required/>
          <span v-if="!userInfo.number" class="text-red-600">Cell number is required</span>
      </div>
      <div class="mb-4">
        <label for="email" class="block text-base mb-1 text-gray-700">Email:</label>
        <input
          v-model="userInfo.email"
          type="email"
          placeholder="johndoe@john.co.za..."
          class="w-full border rounded px-2 py-1" 
          required/>
          <span v-if="!userInfo.email" class="text-red-600">Email is required</span>
      </div>
      <div class="mb-4">
        <label for="address" class="block text-base mb-1 text-gray-700">Address:</label>
        <textarea
          v-model="userInfo.address"
          placeholder="123 Kennington Rd, Oathampshire..."
          class="w-full border rounded px-2 py-1"
          required>
        </textarea>
        <span v-if="!userInfo.address" class="text-red-600">Address is required</span>
      </div>
      <div class="mb-4">
        <label for="surname" class="block text-base mb-1 text-gray-700">Extra Notes:</label>
        <textarea
          v-model="userInfo.notes"
          placeholder="ex. Anniversary..."
          class="w-full border rounded px-2 py-1"></textarea>
      </div>
      <button
        @click="toggleModal()"
        class="bg-primary text-black px-4 py-2 rounded hover:bg-primary-dark">
        Cancel
      </button>
      <button
        @click="submitForm()"
        class="bg-primary text-black px-4 py-2 ml-2 rounded hover:bg-primary-dark">
        Accept
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
      infoModalOpen: false,
      deliveryOption: "delivery", 
      userInfo: {
        name: "",
        surname: "",
        email: "",
        address: "",
        notes: "",
        number: "",
      }
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

    isFormValid() {
      return (
        this.userInfo.name &&
        this.userInfo.email &&
        this.userInfo.number &&
        this.userInfo.address &&
        this.userInfo.surname
      );
    },

    isLastItem() {
      return (productId) => {
        const productIds = Object.keys(this.groupedCart);
        return productId === productIds[productIds.length - 1];
      };
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

    deliveryFee() {
      return this.deliveryOption === "pickup" ? 0 : 70;
    },

    grandTotal() {    
         return this.cartTotal + this.deliveryFee;
      },

    productCodes() {
      const codeMap = {};
      this.cart.forEach((product) => {
        const productCode = product.name.substring(0, 3).toUpperCase();
        codeMap[productCode] = (codeMap[productCode] || 0) + 1;
      });
      const codes = Object.entries(codeMap)
        .map(([code, count]) => (count > 1 ? `${code}(${count})` : code))
        .join(".");
        return codes;
    },
  },

  methods: {
    submitForm() {
      if (this.isFormValid) {
        this.$refs.paymentForm.querySelector('button[type="submit"]').click();
        this.clearCart();
      } else {
        alert('Please fill in all the required fields. They are marked with red');
      }
    },

    toggleModal() {
      this.infoModalOpen =! this.infoModalOpen
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

    removeAllOfType(product) {
    const cartItems = this.$store.state.cart;
    const updatedCart = cartItems.filter(item => item.id !== product.id);
    this.$store.commit("setCart", updatedCart);
    this.saveCart();
  },

    clearCart() {
      this.$store.commit("clearCart");
      this.saveCart();
      this.orderPlaced = false;
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

  mounted() {
    this.retrieveCart();
  },
}
}

</script>

<style scoped>
.container {
  max-width: 960px;
  margin: 0 auto;
}
</style>
