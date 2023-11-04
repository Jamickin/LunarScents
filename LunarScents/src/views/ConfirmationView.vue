
<template>

</template>

<script>
export default {
  data() {
    return {
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
      this.userInfo.address &&
      this.userInfo.surname
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
        this.$refs.paymentForm.querySelector('button[type="submit"]').click(); // Trigger the form submission
      } else {
        alert('Please fill in all the required fields. They are marked with red');
      }
    },
  //   if (this.isFormValid) {
  //     // this.acceptInfoAndSendEmail();
  //     this.closeInfoModal();
  //   } else alert('Please fill in all the required fields. They are marked with red')
  // },
    copyToClipboard() {
      const code = this.generatedCode;
      const textArea = document.createElement("textarea");
      textArea.value = code;
      document.body.appendChild(textArea);
      textArea.select();
      document.execco.zamand("copy");
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

      const emailTo = "lunar.scents@outlook.co.za";
      const mailtoLink = `mailto:${emailTo}?subject=${encodeURIco.zaponent(
        this.emailSubject
      )}&body=${encodeURIco.zaponent(this.emailBody)}`;
      window.open(mailtoLink, "_blank");
      this.closeInfoModal();
    },
  },
};
</script>


