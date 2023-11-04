<template>
  <div class="grid grid-cols-2 justify-between place-items-center">
    <div>
      <h2 class="text-lg font-bold">
        {{ name }}
      </h2>
      <h3>{{ description }}</h3>    
  </div>
    <img
        :src="image"
        :alt="name"
        class="mx-auto rounded-lg max-h-44"
    />
  </div>
  <div class="flex place-items-center">
    <button
        class="transition-all duration-300 mt-2 bg-[#475569] text-white py-2 px-4 rounded hover:opacity-90 hover:bg-red-500 text-sm"
        @click="removeFromCart()"
    >
      Remove
    </button>
    <button
        class="mt-2 transition-all duration-300 ml-4 bg-TertiaryHL active:animate-ping text-white py-2 px-4 rounded hover:opacity-90 hover:bg-slate-500 text-sm"
        @click="increaseQuantity()"
    >
      +
    </button>
    <p class="mt-2 ml-4 text-primary font-bold text-lg">
      R{{ price }}
    </p>
    <p class="mt-2 ml-4 text-primary font-bold text-lg">
      <p class="sm:block hidden">Quantity:</p> ({{ quantity }})
    </p>
  </div>
</template>

<script>
export default {
  name: "CheckoutBox",
  emits: ['removeFromCart', 'increaseQuantity'],
  props: {
    name: {
      type: String
    },
    image: {
      type: String
    },
    price: {
      type: Number
    },
    description: {
      type: String
    },
    quantity: {
      type: Number
    }
  },
  methods: {
    removeFromCart() {
      this.$emit('removeFromCart');
    },
    increaseQuantity() {
      this.$emit('increaseQuantity');
    },
  },
}
</script>
