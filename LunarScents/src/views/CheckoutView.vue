<script>
export default {
    mounted() {
        this.retrieveCart();
        this.adjustContainerHeight();
        window.addEventListener('resize', this.adjustContainerHeight);
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.adjustContainerHeight);
    },
    computed: {
        cart() {
            return this.$store.state.cart;
        }
    },
    methods: {
        clearCartAndAdjustContainer() {
            this.clearCart();
            setTimeout(() => {
                this.adjustContainerHeight();
            }, 100);
        },


        adjustContainerHeight() {
            const container = this.$refs.container;
            if (container) {
                const screenHeight = window.innerHeight;
                const containerHeight = container.getBoundingClientRect().height;
                container.style.height = containerHeight > screenHeight ? 'auto' : `${screenHeight}px`;
            }
        },

        retrieveCart() {
            const storedCart = localStorage.getItem('cart');
            if (storedCart) {
                this.$store.commit('setCart', JSON.parse(storedCart));
            }
        },

        saveCart() {
            const cart = JSON.stringify(this.cart);
            localStorage.setItem('cart', cart);
        },

        removeFromCart(product) {
            this.$store.commit('removeFromCart', product);
            this.saveCart();
        },

        clearCart() {
            this.$store.commit('clearCart');
            this.saveCart();
        },

        placeOrder() {
            this.clearCart();
            this.$router.push('/confirmation');
        }
    }
};
</script>

<template>
    <div class="container mx-auto py-10" ref="container">
        <h1 class="text-3xl font-bold mb-6">Checkout</h1>
        <div v-if="cart.length === 0" class="p-4 bg-gray-100 text-gray-500 rounded">
            <p>Your cart is empty. Start shopping!</p>
        </div>

        <div v-else>
            <div v-for="product in cart" :key="product.id" class="bg-white rounded-lg shadow-md p-6 mt-4">
                <img :src="product.image" :alt="product.name" class="mx-auto h-50 mb-4 rounded-lg" />
                <h2 class="text-xl font-bold">{{ product.name }}</h2>
                <p class="text-gray-500">{{ product.description }}</p>
                <p class="mt-4 text-primary font-bold">{{ product.price }}</p>

                <!-- Button to remove item from cart -->
                <button class="mt-2 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                    @click="removeFromCart(product)">Remove</button>
            </div>

            <button class="mt-6 bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark"
                @click="clearCartAndAdjustContainer">Clear
                Cart</button>

            <button class="mt-6 bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark" @click="placeOrder">Place
                Order</button>

        </div>
    </div>
</template>

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
