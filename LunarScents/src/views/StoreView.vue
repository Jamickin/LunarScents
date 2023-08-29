<script>
export default {
    methods: {
        addToCart(product) {
            this.$store.commit('addToCart', product);
        },

    },
    computed: {
        products() {
            return this.$store.state.products;
        },
        cart() {
            return this.$store.state.cart;
        },
    }
};
</script>


<template>
    <div class="container mx-auto py-10 text-slate-600">
        <h1 class="text-3xl font-extrabold mb-6 text-slate-600">Welcome to the Lunar Scents Store!</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="product in products" :key="product.id" class="bg-white rounded-lg shadow-md p-6 h-auto">
                <img :src=product.image :alt="product.name" class="mx-auto h-50 mb-4 rounded-lg" />
                <h2 class="text-xl font-bold">{{ product.name }}</h2>
                <p class="text-gray-500">{{ product.description }}</p>
                <p class="mt-4 text-primary font-bold">{{ product.price }}</p>
                <button class="mt-4 bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark"
                    @click="addToCart(product)">Add to Cart</button>
            </div>
        </div>
        <div v-if="cart.length > 0" class="mt-6 p-4 bg-green-200 text-green-800 rounded animate-pulse">
            <p class="font-bold">Product added to cart! Go to the <router-link :to="{ name: 'checkout' }"
                    class="text-xl animate-pulse">cart</router-link>
                to complete your
                purchase.</p>
        </div>
    </div>
</template>

<style scoped>
.container {
    max-width: 960px;
    margin: 0 auto;
}

.grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.text-primary {
    color: #FFC600;
}

.bg-primary {
    background-color: #FFC600;
}

.hover\:bg-primary-dark:hover {
    background-color: #E6B800;
}

.text-white {
    color: #FFF;
}
</style>
