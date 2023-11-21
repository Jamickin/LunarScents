<template>
    <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75" @click="closeModalOutside">
      <transition name="modal-fade">
        <div class="bg-white p-6 rounded-lg" @click.stop>
          <h2 class="text-2xl font-bold mb-4">What's in the box?</h2>
          <p class="text-xl my-2">
            Lunar Scents' exquisite gift box is filled with true 
            aromatherapy treasures to take your senses on a captivating
            journey.<br><br>
            1x Enchanted Forest 3-in-1 Spritzer 100ml<br>
            1x Temple Tonic Ball-Roller 10ml<br>
            1x Moonlit Blush Essential Oil Blend 10ml<br>
            1x Aromatherapy Burner<br>
            1x Pair of Handcrafted Macramé Earrings<br>
            1x Handbag Hook<br>
          </p>
          <button @click="closeModal" class="transition-all duration-300 opacity-90 hover:opacity-100 active:scale-110 bg-slate-500 text-white p-2 hover:bg-TertiaryHL rounded-lg mt-6 font-extrabold hover:text-black hover:scale-105">
            Close
          </button>
        </div>
      </transition>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      isOpen: Boolean,
    },
    methods: {
      closeModal() {
        this.$emit('close');
      },
      closeModalOutside(event) {
        if (event.target === event.currentTarget) {
          this.closeModal();
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .modal-fade-enter-active, .modal-fade-leave-active {
    transition: opacity 0.3s;
  }
  
  .modal-fade-enter, .modal-fade-leave-to {
    opacity: 0;
  }
  </style>
  