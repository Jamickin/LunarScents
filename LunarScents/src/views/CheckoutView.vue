<template>
    <div class="container mx-auto py-10" ref="container">
        <h1 class="text-3xl font-bold mb-6">Checkout</h1>
        <div v-if="cart.length === 0" class="p-4 bg-gray-100 text-gray-500 rounded">
            <p>Your cart is empty. Start shopping!</p>
        </div>

        <div v-else>
            <div v-for="product in cart" :key="product.id"
                class="bg-Glass grid grid-cols-2 rounded-lg shadow-md p-8 mt-4 justify-center place-items-center">
                <div>
                    <h2 class="text-lg font-bold">{{ product.name }}</h2>
                    <p class="text-gray-500 text-sm">{{ product.description }}</p>
                    <p class="mt-2 text-primary font-bold text-lg">{{ product.price }}</p>
                </div>
                <img v-if="product.name !== 'Delivery Fee'" :src="product.image || selectedProductImage" :alt="product.name"
                    class="mx-auto rounded-lg max-h-44" />
                <button v-if="product.name !== 'Delivery Fee'"
                    class="mt-2 bg-[#475569] text-white py-2 px-4 rounded hover:opacity-90 text-sm"
                    @click="removeFromCart(product)">Remove</button>
            </div>

            <button class="mt-4 bg-[#475569] text-white py-2 px-4 mr-4 rounded hover:bg-primary-dark text-lg"
                @click="clearCartAndAdjustContainer">Clear Cart</button>
            <button v-if="!orderPlaced" id="place-order-button"
                class="mt-4 bg-[#475569] text-white py-2 px-4 rounded hover:bg-primary-dark text-lg"
                @click="placeOrderAndNavigate">
                Place Order
            </button>

            <div v-if="orderPlaced" class="mt-6 p-4 bg-green-100 text-green-500 rounded">
                <p>Thank you for your order!</p>
            </div>
        </div>
    </div>
</template>
<script>

const DELIVERY_FEE = 100;

export default {
    created() {
        this.scrollToPlaceOrderButton();
    },
    data() {
        return {
            orderPlaced: false,
            selectedProductImage: "", 
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
            const cartItems = this.$store.state.cart;
            if (cartItems.length === 0) {
                return [];
            }
            const subtotal = cartItems.reduce((total, product) => total + parseFloat(product.price.replace('R', '')), 0);
            const total = subtotal + DELIVERY_FEE; 
            const deliveryItem = {
                name: 'Delivery Fee',
                description: 'Delivery fee for your order',
                price: `R${DELIVERY_FEE.toFixed(2)}`,
            };
            return [...cartItems, deliveryItem];
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
        scrollToPlaceOrderButton() {
            this.$nextTick(() => {
                const orderButton = document.getElementById('place-order-button');
                if (orderButton) {
                    orderButton.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        },
        placeOrderAndNavigate() {
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

<style scoped>
.container {
    max-width: 960px;
    margin: 0 auto;
}
</style>
