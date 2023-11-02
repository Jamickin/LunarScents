
<template>
  <div class="h-screen w-screen flex sm:flex-row flex-col sm:gap-40 justify-center place-items-center lg:px-44">
    <!-- <div class="flex flex-col gap-4">
      <a href="#" target="_blank">
        <div
          class="socials"
        >
          <img src="/images/FacebookLogo.svg" alt="Facebook" />
          <p class="pl-4 text-lg font-semibold">Facebook</p>
        </div>
      </a>
      <a href="#" target="_blank">
        <div
          class=" socials"
        >
          <img src="/images/InstaLogo.svg" alt="Instagram" />
          <p class="pl-4 text-lg font-semibold">Instagram</p>
        </div>
      </a>
      <a href="#" target="_blank">
        <div
          class="socials"
        >
          <img src="/images/WhatsappLogo.svg" alt="WhatsApp" />
          <p class="pl-4 text-lg font-semibold">WhatsApp</p>
        </div>
      </a>
    </div> -->

    <div>
      <form
        class="bg-Glass p-8 sm:p-16 rounded-xl my-8 sm:my-0"
        @submit.prevent="sendEmail"
      >
        <label class="text-lg font-semibold" for="name">Name:</label>
        <input
          v-model="formData.name"
          type="text"
          id="name"
          name="name"
          required
          class="w-full p-2 border rounded-md"
        /><br /><br />

        <label class="text-lg font-semibold" for="email">Email:</label>
        <input
          v-model="formData.email"
          type="email"
          id="email"
          name="email"
          required
          class="w-full p-2 border rounded-md"
        /><br /><br />

        <label class="text-lg font-semibold" for="message">Message:</label><br />
        <textarea
          v-model="formData.message"
          id="message"
          name="message"
          rows="4"
          required
          class="w-full p-2 border rounded-md"
        ></textarea
        ><br /><br />

        <button
          class="w-full py-3 bg-Tertiary text-white rounded-md hover:bg-TertiaryHL hover:shadow-lg transition-all duration-300"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: "",
        email: "",
        message: "",
      },
    };
  },
  methods: {
    sendEmail() {
      const subject = "Contact Request from Lunar Scents";
      const to = "andreaweichelt@gmail.com";

      const emailBody = `Name: ${this.formData.name}\nEmail: ${this.formData.email}\nMessage: ${this.formData.message}`;

      const mailtoUrl = `mailto:${to}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(emailBody)}`;

      window.open(mailtoUrl, "_blank");
    },
  },
};
</script>

<style scoped>
  img {
    @apply max-h-12 w-auto my-12;
  }

  .socials {
    @apply flex place-items-center bg-Glass px-8 py-4 hover:scale-110 hover:shadow-2xl rounded-xl transition-all duration-300

  }
</style>
