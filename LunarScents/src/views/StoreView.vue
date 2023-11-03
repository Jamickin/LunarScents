<template>
  <div
      v-if="cart.length > 0"
      class="fixed w-full sm:hidden flex justify-center place-items-center text-center right-0 z-20 bg-Primary">
    <p class="text-black font-extrabold text-lg">
      Product added! Go to
      <router-link
          :to="{ name: 'checkout' }"
          class="text-2xl animate-pulse underline text-green-800"
      >CHECKOUT
      </router-link
      >
      to review your purchase
    </p>
  </div>
  <div class="container relative text-slate-500 py-24">
    <div>
      <p
          class="w-full text-center px-12 font-bold text-lg bg-white rounded-b-2xl py-24">
        All of our products are made with the finest of
        nature's ingredients. We urge you to take a stroll
        through our store and pick what you like!
        <br>
        Please note: We are experiencing growth and eagerly anticipate the addition of new products to our shop in the near
        future!
      </p>
    </div>
    <div
    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-12 px-8 lg:px-0"
  >
    <template v-for="(product, productIndex) in products">
      <template v-if="product.id !== null && productIndex < products.length - 1">
        <Product
          :key="`product_${productIndex}`"
          :id="product.id"
          :name="product.name"
          :img="product.image"
          :description="product.description"
          :price="product.price"
          @addToCart="addToCart(product)"
        ></Product>
      </template>
    </template>
  </div>

  <div class="my-12 px-8 lg:px-0" v-if="products.length > 0">
    <Product 
      :key="`product_${products.length - 1}`"
      :id="products[products.length - 1].id"
      :name="products[products.length - 1].name"
      :img="products[products.length - 1].image"
      :description="products[products.length - 1].description"
      :price="products[products.length - 1].price"
      @addToCart="addToCart(products[products.length - 1])"
    ></Product>
  </div>
    <iframe src="/images/LunarOils.pdf" width="100%" height="800" style="margin-bottom: 1rem;"></iframe>  
    <h1 class="my-6 text-xl font-extrabold">For Pure Essential-Oil orders, please refer to the contact page:</h1>
    <a class=" mr-4 transition-all duration-300 opacity-90 hover:opacity-100 active:scale-110 bg-slate-500 hover:text-black p-2 hover:bg-TertiaryHL rounded-lg  mt-6 font-extrabold text-white hover:scale-105" href="/images/LunarOils.pdf" download="your-pdf-filename.pdf">Download PDF</a>
    <router-link class="transition-all duration-300 opacity-90 hover:opacity-100 active:scale-110 bg-slate-500 hover:text-black p-2 hover:bg-TertiaryHL rounded-lg  mt-6 font-extrabold text-white hover:scale-105" to="/contact">CONTACT</router-link>
    </div>
</template>

<script>
import Products from "@/assets/data/products.json";
import Product from "@/components/Product.vue";
import store from "@/store";

export default {
  name: 'StoreView',
  components: {Product},
  computed: {
    products() {
      return this.$store.state.products;
    },

    cart() {
      return this.$store.state.cart;
    },
  },

  methods: {
    addToCart(product) {
      this.selectedProductImage = product.image;
      this.$store.commit("addToCart", product);
    }
  },

  mounted() {
    store.dispatch('setProducts', Products);
  },
};
</script>

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
</style>
