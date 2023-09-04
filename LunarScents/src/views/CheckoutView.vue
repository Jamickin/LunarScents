<script>
export default {
    created() {
        this.scrollToPlaceOrderButton();
    },
    data() {
        return {
            orderPlaced: false,
        };
    },
    mounted() {
        this.retrieveCart();
        window.addEventListener('resize', this.adjustContainerHeight);
        this.$nextTick(() => {
            this.adjustContainerHeight();
        });
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.adjustContainerHeight);
    },
    computed: {
        cart() {
            return this.$store.state.cart;
        },
    },
    watch: {
        cart: {
            handler() {
                this.adjustContainerHeight();
            },
            deep: true,
        },
    },

    methods: {
        clearCartAndAdjustContainer() {
            this.clearCart();
            this.$nextTick(() => {
                this.adjustContainerHeight();
            });
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
            this.orderPlaced = false;
        },
        placeOrder() {
            this.$store.commit('checkout');
            this.orderPlaced = true;
            this.clearCart();
        },

        scrollToPlaceOrderButton() {
            this.$nextTick(() => {
                const orderButton = document.getElementById('place-order-button');
                if (orderButton) {
                    orderButton.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        },
        placeOrderAndNavigate() {
            // this.placeOrder();
            this.$router.push({ name: 'confirmation' });
        },
        adjustContainerHeight() {
            this.$nextTick(() => {
                const container = this.$refs.container;
                if (container) {
                    const screenHeight = window.innerHeight;
                    const containerHeight = container.getBoundingClientRect().height;
                    container.style.height = containerHeight > screenHeight ? 'auto' : `${screenHeight}px`;
                }
            });
        },
    },
};
</script>


<template>
    <div class="container mx-auto py-10" ref="container">
        <h1 class="text-3xl font-bold mb-6">Checkout</h1>
        <div v-if="cart.length === 0" class="p-4 bg-gray-100 text-gray-500 rounded">
            <p>Your cart is empty. Start shopping!</p>
        </div>

        <div v-else>
            <div v-for="product in cart" :key="product.id" class="bg-white flex flex-col rounded-lg shadow-md p-6 mt-4">
                <h2 class="text-xl font-bold">{{ product.name }}</h2>
                <p class="text-gray-500">{{ product.description }}</p>
                <p class="mt-4 text-primary font-bold">{{ product.price }}</p>
                <img :src="product.image" :alt="product.name" class="mx-auto mb-4 rounded-lg" />
                <button class="mt-2 bg-Primary text-white py-2 px-4 rounded hover:opacity-90"
                    @click="removeFromCart(product)">Remove</button>
            </div>

            <button class="mt-6 bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark"
                @click="clearCartAndAdjustContainer">Clear Cart</button>
            <button v-if="!orderPlaced" id="place-order-button"
                class="mt-6 bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark" @click="placeOrderAndNavigate">
                Place Order </button>

            <div v-if="orderPlaced" class="mt-6 p-4 bg-green-100 text-green-500 rounded">
                <p>Thank you for your order!</p>
            </div>
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
