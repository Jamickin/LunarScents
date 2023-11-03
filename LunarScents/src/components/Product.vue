<template>
  <div class="bg-neutral-50 rounded-2xl hover:shadow-xl shadow-md pb-6 h-auto transition-all duration-100 hover:scale-105  flex flex-col justify-between">
    <img :src="img" :alt="name" class="mx-auto h-50 mb-4 rounded-t-2xl" />
    <div class="px-2">
      <h2 class="text-2xl font-bold text-black">{{ name }}</h2>
      <p class="text-slate-500 my-4 font-bold">{{ description }}</p>
      <p class="text-black font-bold">R{{ price }}.00</p>
      <button @click="addToCart" class="transition-all duration-300 opacity-90 hover:opacity-100 active:scale-110 bg-slate-500 hover:text-black p-2 hover:bg-TertiaryHL rounded-lg  mt-6 font-extrabold text-white hover:scale-105">Add to Cart</button>
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
      type: String,
    },
    img: {
      type: String,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
    },
  },

  methods: {
    addToCart() {
      this.$emit("addToCart");
    },
  },
};
</script>

