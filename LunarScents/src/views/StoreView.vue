<script>
import Carousel from '../components/Carousel.vue';
import { RouterLink } from 'vue-router';

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
    },
    components: { Carousel }
};
</script>


<template>
    <RouterLink to="/confirmation" class="fixed right-6 top-14 h-12">
        <img src="../assets/images/CartIcon.svg" class="h-full hover:scale-105 hover:drop-shadow-lg">
    </RouterLink>
    <div v-if="cart.length > 0"
        class="absolute w-screen text-center top-12 h-16 z-[999] p-4 bg-green-200 text-green-800 rounded animate-pulse">
        <p class="font-bold">Product/s added to cart! Go to the <router-link :to="{ name: 'checkout' }"
                class="text-xl animate-pulse">cart</router-link>
            to complete your
            purchase.</p>
    </div>
    <div class="container mx-auto py-8 relative text-slate-600">
        <h1 class="text-3xl font-extrabold mb-6 text-slate-600">Welcome to the Lunar Scents Store!</h1>
        <Carousel />
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div v-for="product in products" :key="product.id" class="bg-Glass rounded-lg shadow-md p-6 h-auto">
                <img :src=product.image :alt="product.name" class="mx-auto h-50 mb-4 rounded-lg" />
                <h2 class="text-xl font-bold">{{ product.name }}</h2>
                <p class="text-gray-500">{{ product.description }}</p>
                <p class="mt-4 text-black font-bold">{{ product.price }}</p>
                <button class="mt-4 bg-green-400 text-white py-2 px-4 rounded hover:bg-opacity-70"
                    @click="addToCart(product)">Add to
                    Cart</button>
            </div>
        </div>
        <div class="bg-Glass rounded-lg shadow-md p-6 h-auto mt-24">
            <img src="../assets/images/All.jpg" class="mx-auto h-50 mb-4 rounded-lg" />
            <h2 class="text-xl font-bold">Build-A-Box</h2>
            <p class="text-gray-500">All of your favourite merch in one gift box! And a discount to boot!</p>
            <p class="mt-4 text-black font-bold mb-8">R450</p>
            <router-link to="/buildbox"
                class=" bg-green-400 text-white py-2 px-4 rounded hover:bg-opacity-70">Build!</router-link>
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
