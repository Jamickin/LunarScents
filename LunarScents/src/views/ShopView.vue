<script>
  import Carousel from "../components/Carousel.vue";

  export default {
    components: { Carousel },
    data() {
      return {
        products: [
          {
            name: "RollerStore",
            viewname: "Temple Tonic",
            description: "Description of RollerBottle",
            price: "50",
          },
          {
            name: "SprayStore",
            viewname: "Enchanted Forest Spray",
            description: "Description of SprayBottle",
            price: "80",
          },
          {
            name: "TonicStore",
            viewname: "Moonlit Blush Blend",
            description: "Description of TonicBottle",
            price: "120",
          },
        ],
      };
    },
  };
</script>


<template>
  <div
    class="fixed flex justify-center place-items-center w-screen h-[600px]">
    <div
      class="storepic w-full h-full bg-contain bg-center opacity-30"></div>
  </div>
  <div class="container relative text-slate-600 pb-12">
       <Carousel  /> 
      <p
        class="w-full text-center px-12 font-bold text-lg bg-white rounded-b-2xl py-24">
        All of our products are made with the finest of
        natures ingredients. We urge you to take a stroll
        through our store and pick what you like!
      <br>
        Note – We are experiencing growth and eagerly anticipate the addition of new products to our shop in the near future!
      </p>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
      <div
        v-for="(product, index) in products"
        :key="index"
        class="bg-neutral-50 rounded-lg shadow-md pb-6 h-auto">
        <img
          :src="`../src/assets/images/${product.name}.webp`"
          :alt="product.name"
          class="mx-auto h-50 mb-4 rounded-lg"
        />
        <div class="px-2">
          <h2 class="text-xl font-bold">{{ product.viewname }}</h2>
          <p class="text-gray-500 font-bold">{{ product.description }}</p>
          <p class="mt-4 text-black font-bold">R{{ product.price }}.00</p>
          <button
            class="mt-4 bg-[#475569] text-white py-2 px-4 rounded hover:bg-TertiaryHL transition-colors active:animate-ping"
            @click="addToCart(product)"
          >
            Add to Cart
          </button>
        </div>
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
        <h2 class="text-xl font-bold">Gift Box</h2>
        <p class="text-gray-500 font-extrabold">
          All of your favourite merch in one gift box! And a
          discount to boot!
        </p>
        <p class="mt-4 text-black font-bold mb-8">R450</p>
        <button
          class="bg-[#475569] text-white py-2 px-4 rounded hover:bg-TertiaryHL transition-colors"
          >Add to Cart</button
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
  .container {
    padding-top: 3rem;
    max-width: 960px;
    margin: 0 auto;
  }

  .grid {
    grid-template-columns: repeat(
      auto-fit,
      minmax(250px, 1fr)
    );
  }

.storepic {
    background-image: url("../assets/images/Logo.webp");
    background-repeat: no-repeat;
  }
</style>
