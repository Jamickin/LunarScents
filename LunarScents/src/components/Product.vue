<template>
  <div
      class="bg-neutral-50 rounded-2xl shadow-md pb-6 h-auto  transition-all duration-100 hover:scale-105">
    <img
        :src="img" alt="Product Picture"
        class="mx-auto h-50 mb-4 rounded-t-2xl"/>
    <div class="px-2">
      <h2 class="text-2xl font-bolder text-black">
        {{ name }}
      </h2>
      <p class="text-slate-500 my-4 font-bold">
        {{ description }}
      </p>
      <p class=" text-black font-bold">
        R{{ price }}
      </p>
      <button
          class="mt-4 bg-[#475569] text-white py-2 px-4 rounded hover:bg-TertiaryHL transition-colors active:animate-ping"
          @click="addToCart()">
        Add to Cart
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product",
  props: {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String
    },
    img: {
      type: String
    },
    description: {
      type: String
    },
    price: {
      type: Number
    },
  },
  methods: {
    addToCart() {
      this.$emit('addToCart');
    }
  },
  mounted() {
  }
}
</script>

<style scoped>

</style>