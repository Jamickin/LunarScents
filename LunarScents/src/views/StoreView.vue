<script>
  import Carousel from "../components/Carousel.vue";
  import { RouterLink } from "vue-router";

  export default {

    mounted() {
      window.addEventListener("scroll", this.handleScroll);
    },
    beforeUnmount() {
      window.removeEventListener(
        "scroll",
        this.handleScroll
      );
    },
    methods: {
      addToCart(product) {
        this.selectedProductImage = product.image;
        this.$store.commit("addToCart", product);
      },
    },
    computed: {
      products() {
        return this.$store.state.products;
      },
      cart() {
        return this.$store.state.cart;
      },
    },
    components: { Carousel },
  };
</script>

<template>
  <div
    class="fixed flex justify-center place-items-center w-screen h-[600px]">
    <div
      class="storepic w-full h-full bg-contain bg-center opacity-30"></div>
  </div>
  <div
    v-if="cart.length > 0"
    class="fixed  w-full sm:h-12 flex sm:hidden justify-center place-items-center text-center sm:top-12 right-0 z-20 sm:p-4 bg-Primary">
    <p class="text-black font-extrabold text-lg">
      Product added! Go to the
      <router-link
        :to="{ name: 'checkout' }"
        class="text-2xl animate-pulse underline text-green-800"
        >CHECKOUT</router-link
      >
      to review your purchase
    </p>
  </div>
  <div class="container relative text-slate-600 pb-12">
    <div class="">
      <!-- <Carousel :class="{ 'mt-24': cart.length > 0 }" /> -->
      <p
        class="w-full text-center px-12 font-bold text-lg bg-white rounded-2xl py-24">
        All of our products are made with the finest of
        natures ingredients. We urge you to take a stroll
        through our store and pick what you like!
      <br>
        Note – We are experiencing growth and eagerly anticipate the addition of new products to our shop in the near future!
      </p>
    </div>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
      <div
        class="bg-neutral-50 rounded-lg shadow-md pb-6 h-auto">
        <img
          src="../assets/images/RollerStore.webp" alt="RollerBottle"
          class="mx-auto h-50 mb-4 rounded-lg" />
        <div class="px-2">
          <h2 class="text-xl font-bold">
            {{ products[0].name }}
          </h2>
          <p class="text-gray-500 font-bold">
            {{ products[0].description }}
          </p>
          <p class="mt-4 text-black font-bold">
            {{ products[0].price }}
          </p>
          <button
            class="mt-4 bg-[#475569] text-white py-2 px-4 rounded hover:bg-TertiaryHL transition-colors active:animate-ping"
            @click="addToCart(products[0])">
            Add to Cart
          </button>
        </div>
      </div>
      <div
        class="bg-neutral-50 rounded-lg shadow-md pb-6 h-auto">
        <img
          src="../assets/images/SprayStore.webp"
          alt="SprayBottle"
          class="mx-auto h-50 mb-4 rounded-lg bg-" />
        <div class="px-2">
          <h2 class="text-xl font-bold">
            {{ products[1].name }}
          </h2>
          <p class="text-gray-500 font-bold">
            {{ products[1].description }}
          </p>
          <p class="mt-4 text-black font-bold">
            {{ products[1].price }}
          </p>
          <button
            class="mt-4 bg-[#475569] text-white py-2 px-4 rounded hover:bg-TertiaryHL transition-colors active:animate-ping"
            @click="addToCart(products[1])">
            Add to Cart
          </button>
        </div>
      </div>
      <div
        class="bg-neutral-50 rounded-lg shadow-md pb-6 h-auto">
        <img
          src="../assets/images/TonicStore.webp"
          alt="TonicBottle"
          class="mx-auto h-50 mb-4 rounded-lg" />
        <div class="px-2">
          <h2 class="text-xl font-bold">
            {{ products[2].name }}
          </h2>
          <p class="text-gray-500 font-bold">
            {{ products[2].description }}
          </p>
          <p class="mt-4 text-black font-bold">
            {{ products[2].price }}
          </p>
          <button
            class="mt-4 bg-[#475569] text-white py-2 px-4 rounded hover:bg-TertiaryHL transition-colors active:animate-ping"
            @click="addToCart(products[2])">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
    <div
      class="bg-neutral-50 rounded-lg shadow-md pb-6 h-auto">
      <img
        src="../assets/images/All.webp"
        alt="GiftBox"
        class="mx-auto h-50 mb-4 rounded-lg" />
      <div class="px-2">
        <h2 class="text-xl font-bold">{{ products[3].name }}</h2>
        <p class="text-gray-500 font-extrabold">
          {{ products[3].description }}
        </p>
        <p class="mt-4 text-black font-bold mb-8">          
          {{ products[3].price }}
        </p>
        <button
        @click="addToCart(products[3])"
          class="bg-[#475569] text-white py-2 px-4 rounded hover:bg-TertiaryHL transition-colors"
          >Add to Cart</button
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
  .container {
    max-width: 960px;
    margin: 0 auto;
  }

  .grid {
    grid-template-columns: repeat(
      auto-fit,
      minmax(250px, 1fr)
    );
  }

  .text-primary {
    color: #ffc600;
  }

  .bg-primary {
    background-color: #ffc600;
  }

  .hover\:bg-primary-dark:hover {
    background-color: #e6b800;
  }

  .text-white {
    color: #fff;
  }

  .storepic {
    background-image: url("../assets/images/Logo.webp");
    background-repeat: no-repeat;
  }
</style>
