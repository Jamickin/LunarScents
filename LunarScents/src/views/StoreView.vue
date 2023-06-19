
<script>

export default {
    data() {
        return {
            products: [
                {
                    id: 1,
                    name: 'Stardust Elixir',
                    description: 'An enchanting blend of celestial florals and musk.',
                    price: '$49.99',
                    image: '/images/stardust-elixir.jpg'
                },
                {
                    id: 2,
                    name: 'Moonbeam Mist',
                    description: 'A refreshing mist infused with the essence of moonlight.',
                    price: '$29.99',
                    image: '/images/moonbeam-mist.jpg'
                },
                // Add more products as needed
            ]
        };
    },

    methods: {
        addToCart(product) {
            // Add the selected product to the cart array
            this.cart.push(product);
            console.log('Product added to cart:', product);
        }
    }
};
</script>


<template>
    <div class="container mx-auto py-10">
        <h1 class="text-3xl font-bold mb-6">Welcome to the Lunar Scents Store!</h1>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Product Cards -->
            <div v-for="product in products" :key="product.id" class="bg-white rounded-lg shadow-md p-6">
                <img :src="product.image" :alt="product.name" class="mx-auto h-40 mb-4" />
                <h2 class="text-xl font-bold">{{ product.name }}</h2>
                <p class="text-gray-500">{{ product.description }}</p>
                <p class="mt-4 text-primary font-bold">{{ product.price }}</p>
                <button class="mt-4 bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark"
                    @click="addToCart(product)">Add to Cart</button>
            </div>
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
