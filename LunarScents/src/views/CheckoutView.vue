<template>
    <div class="container mx-auto py-10">
        <h1 class="text-3xl font-bold mb-6">Checkout</h1>

        <div v-if="cart.length === 0" class="p-4 bg-gray-100 text-gray-500 rounded">
            <p>Your cart is empty. Start shopping!</p>
        </div>

        <div v-else>
            <div v-for="product in cart" :key="product.id" class="bg-white rounded-lg shadow-md p-6 mt-4">
                <h2 class="text-xl font-bold">{{ product.name }}</h2>
                <p class="text-gray-500">{{ product.description }}</p>
                <p class="mt-4 text-primary font-bold">{{ product.price }}</p>

                <!-- Button to remove item from cart -->
                <button class="mt-2 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                    @click="removeFromCart(product)">Remove</button>
            </div>

            <button class="mt-6 bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark" @click="clearCart">Clear
                Cart</button>

            <button class="mt-6 bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark" @click="placeOrder">Place
                Order</button>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        cart() {
            return this.$store.state.cart;
        }
    },
    methods: {
        removeFromCart(product) {
            this.$store.commit('removeFromCart', product);
        },
        clearCart() {
            this.$store.commit('clearCart');
        },
        placeOrder() {
            // Logic to handle placing the order
            // You can customize this function as per your requirements

            // Clear the cart after placing the order
            this.clearCart();

            // Redirect to a confirmation or thank you page
            this.$router.push('/confirmation');
        }
    }
};
</script>

<style scoped></style>


<style scoped>
.container {
    max-width: 960px;
    margin: 0 auto;
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
