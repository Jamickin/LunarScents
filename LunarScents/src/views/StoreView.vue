<script>
import Carousel from '../components/Carousel.vue';
import { RouterLink } from 'vue-router';

export default {
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    },
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
    <div class="h-screen w-screen -top-[5rem] fixed flex place-items-center justify-center"> <img
            src="../assets/images/Logo.png" class="h-full opacity-40">
    </div>
    <RouterLink to="/checkout" class="fixed right-6 top-14 h-12 z-[99999]">
        <img src="../assets/images/CartIcon.svg" class="md:h-full h-0 hover:scale-105 hover:drop-shadow-lg">
    </RouterLink>
    <div v-if="cart.length > 0"
        class="fixed w-screen text-center top-12  z-[999] p-4 bg-neutral-50 text-black font-extrabold rounded-b-2xl" >
        <p class="">Product added! Go to the <router-link :to="{ name: 'checkout' }"
                class="text-xl animate-pulse underline text-green-600">cart</router-link>
            to review your
            purchase.</p>
    </div>
    <div class="container py-8 relative text-slate-600">
        <div>
            <Carousel :class="{ 'mt-16': cart.length > 0 }" />
            <p class="w-full text-center px-12 pt-6 font-bold text-lg">All of our products are made with the finest of
                natures
                ingredients. We urge you
                to take a stroll through our exhaustive store and pick what you like!</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
    <!-- Product 1 -->
    <div class="bg-Glass rounded-lg shadow-md pb-6 px-2 h-auto">
        <img src="../assets/images/RollerStore.jpg"  class="mx-auto h-50 mb-4 rounded-lg" />
        <h2 class="text-xl font-bold">{{ products[0].name }}</h2>
        <p class="text-gray-500 font-bold">{{ products[0].description }}</p>
        <p class="mt-4 text-black font-bold">{{ products[0].price }}</p>
        <button
            class="mt-4 bg-[#475569] text-white py-2 px-4 rounded hover:bg-TertiaryHL transition-colors active:animate-ping"
            @click="addToCart(products[0])">Add to Cart</button>
    </div>

    <!-- Product 2 -->
    <div class="bg-Glass rounded-lg shadow-md pb-6 px-2 h-auto">
        <img src="../assets/images/RollerStore.jpg"  class="mx-auto h-50 mb-4 rounded-lg" />
        <h2 class="text-xl font-bold">{{ products[1].name }}</h2>
        <p class="text-gray-500 font-bold">{{ products[1].description }}</p>
        <p class="mt-4 text-black font-bold">{{ products[1].price }}</p>
        <button
            class="mt-4 bg-[#475569] text-white py-2 px-4 rounded hover:bg-TertiaryHL transition-colors active:animate-ping"
            @click="addToCart(products[1])">Add to Cart</button>
    </div>

    <!-- Product 3 -->
    <div class="bg-Glass rounded-lg shadow-md pb-6 px-2 h-auto">
        <img src="../assets/images/RollerStore.jpg"  class="mx-auto h-50 mb-4 rounded-lg" />
        <h2 class="text-xl font-bold">{{ products[2].name }}</h2>
        <p class="text-gray-500 font-bold">{{ products[2].description }}</p>
        <p class="mt-4 text-black font-bold">{{ products[2].price }}</p>
        <button
            class="mt-4 bg-[#475569] text-white py-2 px-4 rounded hover:bg-TertiaryHL transition-colors active:animate-ping"
            @click="addToCart(products[2])">Add to Cart</button>
    </div>
</div>

        <!-- <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div v-for="product in products" :key="product.id" class="bg-Glass rounded-lg shadow-md pb-6 px-2 h-auto">
                <img :src=product.image :alt="product.name" class="mx-auto h-50 mb-4 rounded-lg" />
                <h2 class="text-xl font-bold">{{ product.name }}</h2>
                <p class="text-gray-500 font-bold">{{ product.description }}</p>
                <p class="mt-4 text-black font-bold">{{ product.price }}</p>
                <button
                    class="mt-4 bg-[#475569] text-white py-2 px-4 rounded hover:bg-TertiaryHL transition-colors active:animate-ping"
                    @click="addToCart(product)">Add to Cart</button>
            </div>
        </div> -->
        <!-- <div class="bg-Glass rounded-lg shadow-md pb-6 h-auto mt-24 px-6">
            <img src="../assets/images/All.jpg" class="mx-auto h-50 mb-4 rounded-lg" />
            <h2 class="text-xl font-bold">Build-A-Box</h2>
            <p class="text-gray-500">All of your favourite merch in one gift box! And a discount to boot!</p>
            <p class="mt-4 text-black font-bold mb-8">R450</p>
            <router-link to="/buildbox"
                class=" bg-[#475569] text-white py-2 px-4 rounded hover:bg-TertiaryHL transition-colors">Build!</router-link>
        </div>
        <div class="bg-Glass rounded-lg shadow-md pb-6 h-auto mt-24 px-6">
            <img src="../assets/images/gallery/_MGL0126.jpg" class="mx-auto h-50 mb-4 rounded-lg" />
            <h2 class="text-xl font-bold">Resell</h2>
            <p class="text-gray-500 mb-4">Unbranded for selling and reselling!</p>
            <router-link to="/resell"
                class="bg-[#475569] text-white py-2 px-4 rounded hover:bg-TertiaryHL transition-colors">Resell
                Store</router-link>
        </div> -->
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
