<script>

export default {
  components: {
  },
  data() {
    return {
      isScrolling: false,
      isMenuOpen: false,
};
  },
  computed: {
    cartItemCount() {
      return this.$store.state.cart.length;
    },
  },
  methods: {
    handleScroll() {
      if (window.innerWidth < 640) {
        this.isMenuOpen = true;
      };
      if (window.scrollY > 0) {
          this.isScrolling = true;
      } else {
          this.isScrolling = false;
      };
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>


<template>
  <div
    class="sidebar transition-all duration-300 ease-in-out fixed top-0 left-0 sm:h-12 sm:w-screen h-screen flex flex-col justify-evenly bg-white sm:bg-Glass place-items-center sm:flex-row z-50 sm:text-white shadow-md"
    :class="{
      scrolling: isScrolling,
      'menu-open': isMenuOpen,
    }">
    <button @click="isMenuOpen = !isMenuOpen" class="transition-all duration-300 fixed left-16 top-0 sm:hidden block" :class="{'button-visible' : isMenuOpen}"><img src="../assets/images/ArrowRight.svg" class="w-12 rotate-180"></button>
    <div class="flex sm:flex-row flex-col w-full h-full place-items-center justify-evenly"
    >
    <router-link to="/" class="menu-item">
      <p>HOME</p>
    </router-link>
    <router-link to="/about" class="menu-item">
      <p>ABOUT</p>
    </router-link>
    <router-link to="/store" class="menu-item">
      <p>SHOP</p>
    </router-link>
    </div>
   
    <div class="w-full h-full relative justify-center hidden sm:flex"
    >
    <img
        src="../assets/images/Logo.webp"
        class="absolute transition-all duration-300"
        :class="{ 'h-36': !isScrolling, 'h-12': isScrolling }"
      />    
      </div>
      <div class="flex sm:flex-row flex-col w-full h-full place-items-center justify-evenly"
   >
        <!-- <router-link to="/gallery" class="menu-item">
      <p>GALLERY</p>
    </router-link>  -->
    <!-- <div class="menu-item"></div> -->
     <router-link to="/faq" class="menu-item">
      <p>FAQ</p>
    </router-link> 
    <router-link to="/contact" class="menu-item">
      <p>CONTACT</p>
    </router-link>
    <!-- <router-link to="/profile" class="menu-item">
      <p>PROFILE</p>
    </router-link> -->
    <router-link to="/checkout" class="menu-item">
      <p>CHECKOUT</p>
      <div class="h-12 w-12 sm:block hidden mr-4"
    >
        <img
          src="../assets/images/CartIcon.svg"
          class="h-full">
          <span class="text-TertiaryHL">({{ cartItemCount }})</span>
      </div>
    </router-link>
    </div>
  </div>
</template>


<style scoped>

  .menu-item {
    @apply w-full sm:px-2 sm:py-1 flex place-items-center justify-center text-center transition-all duration-700 h-full font-bold sm:text-lg text-xs;
  }

  .menu-item:hover {
    @apply shadow-2xl text-TertiaryHL;
  }

  p {
    @apply w-full;
  }

  .scrolling {
    @apply bg-neutral-50 text-slate-500;
  }

  .menu-open {
    left: -50%;
  }

  .large {
    @apply h-12;
  }

  .small {
    @apply h-4;
  }

  .button-visible {
    left: 0;
    @apply rotate-180
  }

  @media (min-width: 640px) {
    .sm\:w-screen {
        width: 100dvw;
    }
}

</style>
