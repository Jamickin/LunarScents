<template>
    <div class="p-4 text-center">
        <h1 class="text-3xl font-bold mb-4">Order Confirmation</h1>
        <div class="text-lg leading-relaxed">
            <p v-if="cart.length > 0">Thank you for placing your order with Lunar Scents!</p>
            <p v-if="cart.length === 0">Your cart is empty. Start shopping!</p>
            <p v-if="cart.length > 0"> Your order details: </p>
            <div class=" mt-4">
                <div v-for=" product  in  cart " :key="product.id" class="border p-2 mb-2">
                    <h2 class="text-xl font-bold">{{ product.name }}</h2>
                    <p class="text-gray-500">{{ product.description }}</p>
                    <p class="mt-2">Price: {{ product.price }}</p>
                </div>
                <div v-if="cart.length > 0" class="border p-2 mb-2">
                    <h2 class="text-xl font-bold">Delivery Fee</h2>
                    <p class="text-gray-500">Delivery fee for your order</p>
                    <p class="mt-2">Price: R100.00</p>
                </div>
            </div>
            <p v-if="cart.length > 0" class="text-xl font-bold mt-4">Grand Total: {{ formattedTotal }}</p>
            <button v-if="cart.length > 0" @click="openInfoModal"
                class="animate-pulse bg-primary font-extrabold text-TertiaryHL py-2 px-4 rounded hover:bg-primary-dark">Press
                this
                link to
                copy a code. It will open your preferred email app.<br>All you have to do is press send!</button>
        </div>
    </div>
    <div v-if="infoModalOpen"
        class="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center">
        <div class="bg-white rounded-lg p-6 w-96">
            <h2 class="text-2xl font-semibold mb-4">Enter Your Information</h2>
            <div class="mb-4">
                <input v-model="userInfo.name" type="text" placeholder="Name" class="w-full border rounded px-2 py-1">
            </div>
            <div class="mb-4">
                <input v-model="userInfo.surname" type="text" placeholder="Surname" class="w-full border rounded px-2 py-1">
            </div>
            <div class="mb-4">
                <input v-model="userInfo.email" type="email" placeholder="Email" class="w-full border rounded px-2 py-1">
            </div>
            <div class="mb-4">
                <textarea v-model="userInfo.address" placeholder="Shipping Address"
                    class="w-full border rounded px-2 py-1"></textarea>
            </div>
            <div class="mb-4">
                <textarea v-model="userInfo.notes" placeholder="Special Notes ex. Anniversary"
                    class="w-full border rounded px-2 py-1"></textarea>
            </div>
            <button @click="closeInfoModal"
                class="bg-primary text-black px-4 py-2 rounded hover:bg-primary-dark">Cancel</button>
            <button @click="acceptInfoAndSendEmail"
                class="bg-primary text-black px-4 py-2 ml-2 rounded hover:bg-primary-dark">Accept</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            emailSubject: 'Order Inquiry',
            emailBody: '',
            showFullCode: false,
            infoModalOpen: false,
            userInfo: {
                name: '',
                surname: '',
                email: '',
                address: '',
                notes: ''
            },
        };
    },

    computed: {
        cart() {
            return this.$store.state.cart;
        },
        formattedTotal() {
            const total = this.calculateTotal() + 100;
            return `R${total.toFixed(2)}`;
        },
        generatedCode() {
            const productCodes = this.cart.map(product => product.name.substring(0, 3).toUpperCase());
            const code = productCodes.join('');
            return code;
        },
        truncatedCode() {
            const code = this.generatedCode;
            return code.length > 5 ? `${code.substring(0, 5)}...` : code;
        },
    },

    methods: {
        calculateTotal() {
            return this.cart.reduce((total, product) => total + parseFloat(product.price.replace('R', '')), 0);
        },
        copyToClipboard() {
            const code = this.generatedCode;
            const textArea = document.createElement('textarea');
            textArea.value = code;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
        },
        openInfoModal() {
            this.infoModalOpen = true;
        },
        closeInfoModal() {
            this.infoModalOpen = false;
        },
        acceptInfoAndSendEmail() {
            this.emailBody = `
        Hi Andrea,

        I am reaching out to you regarding my recent order with Lunar Scents. 
        Here's the order details:

        Order Code: ${this.generatedCode}

        Grand Total: ${this.formattedTotal}

        Email: ${this.userInfo.email}
        Shipping Address: ${this.userInfo.address}

        Special Notes: ${this.userInfo.notes}

        Best regards,
        ${this.userInfo.name} ${this.userInfo.surname}
      `;

            const emailTo = 'lunar.scents@outlook.com';
            const mailtoLink = `mailto:${emailTo}?subject=${encodeURIComponent(this.emailSubject)}&body=${encodeURIComponent(this.emailBody)}`;
            window.open(mailtoLink, '_blank');
            this.closeInfoModal();
        }
    },
};
</script>