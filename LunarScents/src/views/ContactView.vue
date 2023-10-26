<template>
  <div
    class="sm:h-screen w-screen flex sm:flex-row flex-col gap-40 justify-evenly place-items-center lg:px-44">
    <div class="flex flex-col gap-2">
      <a href="" target="_blank"
        ><div
        class="flex place-items-center bg-Glass px-8 hover:scale-110 hover:shadow-2xl rounded-xl transition-all duration-300">
          <img src="../assets/images/FacebookLogo.svg" />
          <p class="pl-12">Facebook</p>
        </div></a
      >
      <a href="" target="_blank"
        ><div
          class="flex place-items-center bg-Glass px-8 hover:scale-110 hover:shadow-2xl rounded-xl transition-all duration-300">
          <img src="../assets/images/InstaLogo.svg" />
          <p class="pl-12">Instagram</p>
        </div></a
      >
      <a href="" target="_blank"
        ><div
        class="flex place-items-center bg-Glass px-8 hover:scale-110 hover:shadow-2xl rounded-xl transition-all duration-300">
          <img src="../assets/images/WhatsappLogo.svg" />
          <p class="pl-12">Whatsapp</p>
        </div></a
      >
    </div>

    <div>
      <form
        class="bg-Glass p-16 sm:rounded-2xl my-12 sm:my-0"
        @submit.prevent="sendEmail">
        <label class="pr-4" for="name">Name:</label>
        <input
          v-model="formData.name"
          type="text"
          id="name"
          name="name"
          required /><br /><br />

        <label class="pr-4" for="email">Email:</label>
        <input
          v-model="formData.email"
          type="email"
          id="email"
          name="email"
          required /><br /><br />

        <label for="message">Message:</label><br />
        <textarea
          v-model="formData.message"
          id="message"
          name="message"
          rows="4"
          required></textarea
        ><br /><br />

        <button
          class="p-4 bg-neutral-50 rounded-2xl hover:bg-TertiaryHL hover:shadow-xl transition-colors duration-300"
          type="submit">
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
    @apply h-12 w-12 my-12;
  }
</style>
