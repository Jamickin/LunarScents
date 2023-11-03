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
    <template
  :key="'product_' + productIndex"
  v-for="(product, productIndex) in products">
        <template v-if="product.id !== null">
          <Product
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
    <iframe src="/images/LunarOils.pdf" width="100%" height="800" style="margin-bottom: 1rem;"></iframe>  
    <a class="font-extrabold text-TertiaryHL bg-slate-600 rounded-lg p-2 px-2 " href="/images/LunarOils.pdf" download="your-pdf-filename.pdf">Download PDF</a>
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
