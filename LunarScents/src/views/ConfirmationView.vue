
<template>
  <div class="text-center max-h-screen flex flex-col place-items-center justify-center text-slate-500 py-36">
    <h1 class="text-3xl font-bold mb-4">
      Order Confirmation
    </h1>
    <div class="text-lg leading-relaxed">
      <p v-if="cart.length > 0">
        Thank you for placing your order with Lunar Scents!
      </p>
      <p v-if="cart.length > 0">Your order details:</p>
      <p
        v-if="cart.length > 0"
        class="text-xl font-bold mt-4">
        Grand Total: R{{ receivedTotal }}.00
      </p>
      <!-- <button
        v-if="cart.length > 0"
        @click="openInfoModal"
        class="animate-pulse bg-primary font-extrabold text-green-500 py-2 px-4 rounded hover:bg-primary-dark">
        Press this link to copy a code. It will open your
        preferred email app.<br />All you have to do is
        press send!
      </button> -->
      <form action="https://www.payfast.co.za/eng/process" method="post">
        <input type="hidden" name="merchant_id" value="23365764">
        <input type="hidden" name="merchant_key" value="6rsiv5tziqj24">
        <input type="hidden" name="return_url" value="https://www.example.com/success">
        <input type="hidden" name="cancel_url" value="https://www.example.com/cancel">
        <input type="hidden" name="notify_url" value="https://www.example.com/notify">
        <input type="hidden" name="amount" :value="receivedTotal">
        <input type="hidden" name="item_name" value="OrderNumber">
        <input type="hidden" name="name_first" :value="userInfo.name">
        <input type="hidden" name="name_last" :value="userInfo.surname">
        <input type="hidden" name="email_address" :value="userInfo.email">
        <input type="hidden" name="cell_number" value="0823456789"> 
        <input type="submit">
      </form>
    </div>
  </div>
  <div
    v-if="infoModalOpen"
    class="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center">
    <div class="bg-white rounded-lg p-6 w-96">
      <h2 class="text-2xl font-semibold mb-4">
        Enter Your Information
      </h2>
      <div class="mb-4">
        <label for="name" class="block text-base mb-1 text-gray-700">Name</label>
        <input
          id="name"
          v-model="userInfo.name"
          type="text"
          placeholder="Name"
          class="w-full border rounded px-2 py-1"
          required />
        <span v-if="!userInfo.name" class="text-red-600">Name is required</span>
      </div>
      <div class="mb-4">
        <input
          v-model="userInfo.surname"
          type="text"
          placeholder="Surname"
          class="w-full border rounded px-2 py-1" />
      </div>
      <div class="mb-4">
        <input
          v-model="userInfo.number"
          type="integer"
          placeholder="Number"
          class="w-full border rounded px-2 py-1" 
          required/>
          <span v-if="!userInfo.number" class="text-red-600">Cell umber is required</span>
      </div>
      <div class="mb-4">
        <input
          v-model="userInfo.email"
          type="email"
          placeholder="Email"
          class="w-full border rounded px-2 py-1" 
          required/>
          <span v-if="!userInfo.email" class="text-red-600">Email is required</span>

      </div>
      <div class="mb-4">
        <textarea
          v-model="userInfo.address"
          placeholder="Shipping Address"
          class="w-full border rounded px-2 py-1"
          required>
        </textarea>
        <span v-if="!userInfo.address" class="text-red-600">Address is required</span>

      </div>
      <div class="mb-4">
        <textarea
          v-model="userInfo.notes"
          placeholder="Special Notes ex. Anniversary"
          class="w-full border rounded px-2 py-1"></textarea>
      </div>
      <button
        @click="navigateBack"
        class="bg-primary text-black px-4 py-2 rounded hover:bg-primary-dark">
        Cancel
      </button>
      <button
        @click="submitForm"
        class="bg-primary text-black px-4 py-2 ml-2 rounded hover:bg-primary-dark">
        Accept
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      emailSubject: "Order Inquiry",
      emailBody: "",
      showFullCode: false,
      infoModalOpen: true,
      userInfo: {
        name: "",
        surname: "",
        email: "",
        address: "",
        notes: "",
        number: "",
      },
    };
  },

  computed: {
    cart() {
      return this.$store.state.cart;
    },
    isFormValid() {
    return (
      this.userInfo.name &&
      this.userInfo.email &&
      this.userInfo.number &&
      this.userInfo.address
    );
  },
    calculatedTotal() {
      return this.calculateTotal();
    },
    deliveryFee() {
      return this.calculatedTotal > 800 ? 0 : 100; 
    },
    receivedTotal() {
      return parseFloat(this.$route.query.total) || 0;
    },
    formattedTotal() {
      const total = this.calculatedTotal + this.deliveryFee;
      return `R${total.toFixed(2)}`;
    },
    generatedCode() {
  const productCodes = this.cart.map((product) =>
    product.name.substring(0, 3).toUpperCase()
  );
  return productCodes.join(".");
},
    truncatedCode() {
      const code = this.generatedCode;
      return code.length > 5 ? `${code.substring(0, 5)}...` : code;
    },
  },

  methods: {
    calculateTotal() {
      return this.cart.reduce(
        (total, product) =>
          total + parseFloat(product.price.replace("R", "")),
        0
      );
    },

    navigateBack() {
      this.$router.go(-1);
    },

    submitForm() {
    if (this.isFormValid) {
      // this.acceptInfoAndSendEmail();
      this.closeInfoModal();
    }
  },
    copyToClipboard() {
      const code = this.generatedCode;
      const textArea = document.createElement("textarea");
      textArea.value = code;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
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

        Grand Total: R${this.receivedTotal}.00

        Email: ${this.userInfo.email}
        
        Shipping Address: ${this.userInfo.address}

        Special Notes: ${this.userInfo.notes}

        Best regards,
        ${this.userInfo.name} ${this.userInfo.surname}
      `;

      const emailTo = "lunar.scents@outlook.com";
      const mailtoLink = `mailto:${emailTo}?subject=${encodeURIComponent(
        this.emailSubject
      )}&body=${encodeURIComponent(this.emailBody)}`;
      window.open(mailtoLink, "_blank");
      this.closeInfoModal();
    },
  },
};
</script>


