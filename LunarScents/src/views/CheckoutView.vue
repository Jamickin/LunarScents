<!-- CheckoutView.vue -->
<template>
  <div>
    <h1>Checkout</h1>
    <div v-if="selectedProduct">
      <h2>{{ selectedProduct.viewname }}</h2>
      <p>Description: {{ selectedProduct.description }}</p>
      <p>Price: R{{ selectedProduct.price }}.00</p>
      <!-- Add more details as needed -->
    </div>
    <div v-else>
      <p>No product selected.</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    productId: {
      type: String, // Adjust the type based on your product ID data type
      required: true,
    },
  },
  computed: {
    selectedProduct() {
      // Use the product ID from route params to retrieve the product data
      return this.products.find((product) => product.id === this.productId);
    },
    products() {
      // Replace this with your product data (e.g., from an API or a static array)
      return [
        {
          id: "1",
          viewname: "Temple Tonic",
          description: "Description of RollerBottle",
          price: "50",
        },
        {
          id: "2",
          viewname: "Enchanted Forest Spray",
          description: "Description of SprayBottle",
          price: "80",
        },
        {
          id: "3",
          viewname: "Moonlit Blush Blend",
          description: "Description of TonicBottle",
          price: "120",
        },
        // Add more product data as needed
      ];
    },
  },
};
</script>
