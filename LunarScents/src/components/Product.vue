<template>
  <div
      class="bg-neutral-50 rounded-2xl shadow-md pb-6 h-auto  transition-all duration-100 hover:scale-105">
    <img
        :src="`../src/assets/images/All.webp`" :alt="name"
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
      <div id='product-component-1698749682460'></div>
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
    console.log(this.img);
  }
}
</script>

<style scoped>

</style>