<script>
  export default {
    data() {
      return {
        faqs: [
          {
            question:
              "What are Lunar Scents products made of?",
            answer:
              "Our products are made with all-natural ingredients carefully sourced to create the perfect scents. We use a blend of essential oils, natural fragrances, and soy wax in our candles and sprays.",
            open: false,
          },
          {
            question: "Are your products eco-friendly?",
            answer:
              "Yes, we prioritize sustainability. Our packaging is recyclable and we also strive to minimize our carbon footprint in our production process.",
            open: false,
          },
          {
            question: "How long does your spray last?",
            answer:
              "On average, our sprays last between 2000 and 3000 sprays. However, that may vary depending on factors like the pressure of the spray-action and environmental conditions such as an enclosed space needing less sprays.",
            open: false,
          },
          {
            question: "Do you offer custom scents?",
            answer:
              "Currently, we offer a curated selection of scents, but we're always open to feedback and suggestions. Feel free to reach out with your scent ideas, and we'll consider them for future products.",
            open: false,
            link: "/contact",
          },
        ],
      };
    },
    methods: {
      toggleDropdown(index) {
        this.faqs.forEach((faq, i) => {
          if (i !== index) {
            faq.open = false;
          }
        });
        this.faqs[index].open = !this.faqs[index].open;
      },
    },
  };
</script>

<template>
  <div
    class="max-w-3xl mx-auto flex flex-col h-screen justify-center items-center z-20">
    <h1 class="text-3xl font-semibold mb-6">
      Frequently Asked Questions
    </h1>
    <div
      v-for="(faq, index) in faqs"
      :key="index"
      class="mb-4 border rounded-md w-full">
      <div
        class="bg-Secondary text-black px-4 py-2 cursor-pointer flex justify-between items-center"
        @click="toggleDropdown(index)">
        <div>{{ faq.question }}</div>
      </div>
      <transition name="slide-fade">
        <div v-if="faq.open" class="bg-gray-100 px-4 py-2">
          {{ faq.answer }}
          <div v-if="faq.link">
      <a :href="faq.link" class="btn-contact">Contact Us</a>
    </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<style scoped>
  .slide-fade-enter-active,
  .slide-fade-leave-active {
    transition: max-height 0.5s ease-in-out,
      opacity 0.5s ease-in-out;
  }

  .slide-fade-enter,
  .slide-fade-leave-to {
    max-height: 500px;
    opacity: 0;
    overflow: hidden;
  }

  .btn-contact {
  display: inline-block;
  margin-top: 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #475569; 
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-contact:hover {
@apply bg-TertiaryHL 
}
</style>
