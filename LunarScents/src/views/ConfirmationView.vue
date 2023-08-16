
<script>
export default {
    data() {
        return {
            showFullCode: false,
        };
    },
    computed: {
        cart() {
            return this.$store.state.cart;
        },
        formattedTotal() {
            const total = this.calculateTotal();
            return `$${total.toFixed(2)}`;
        },
        generatedCode() {
            const productCodes = this.cart.map(product => product.name.substring(0, 3).toUpperCase());
            const code = productCodes.join('');
            return code;
        },
        truncatedCode() {
            const code = this.generatedCode;
            return code.length > 5 ? `${code.substring(0, 5)}...` : code;
        }
    },
    methods: {
        calculateTotal() {
            return this.cart.reduce((total, product) => total + parseFloat(product.price.replace('$', '')), 0);
        },
        copyToClipboard() {
            const code = this.generatedCode;
            const textArea = document.createElement('textarea');
            textArea.value = code;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
        }
    },
};
</script>


<template>
    <div class="p-4 text-center">
        <h1 class="text-3xl font-bold mb-4">Order Confirmation</h1>
        <div class="text-lg leading-relaxed">
            <p>Thank you for placing your order with Lunar Scents!</p>
            <p>Your order details:</p>
            <div class="mt-4">
                <div v-for="product in cart" :key="product.id" class="border p-2 mb-2">
                    <h2 class="text-xl font-bold">{{ product.name }}</h2>
                    <p class="text-gray-500">{{ product.description }}</p>
                    <p class="mt-2">Price: {{ product.price }}</p>
                </div>
            </div>
            <p class="text-xl font-bold mt-4">Grand Total: {{ formattedTotal }}</p>
            <p class="mt-4">Please use the following code when contacting the CEO:</p>
            <p @mouseenter="showFullCode = true" @mouseleave="showFullCode = false">
                {{ showFullCode ? generatedCode : truncatedCode }}
            </p>
            <button @click="copyToClipboard"
                class="bg-primary text-TertiaryHL py-2 px-4 rounded hover:bg-primary-dark">Copy</button>
        </div>
        @Andrea - (Number Here)
    </div>
</template>
