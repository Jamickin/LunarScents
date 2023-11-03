
<template>
  <div
    class="sidebar transition-all duration-300 ease-in-out fixed top-0 left-0 sm:h-12 sm:w-screen h-screen flex flex-col justify-evenly bg-white sm:bg-Primary place-items-center sm:flex-row z-50 sm:text-white shadow-md"
      :class="{
        // scrolling: isScrolling,
        'menu-open': isMenuOpen,
      }">
    <button @click="isMenuOpen = !isMenuOpen" class="transition-all duration-300 fixed left-16 top-0 sm:hidden block"
      :class="{'button-visible' : isMenuOpen}"><img src="/images/ArrowRight.svg" class="w-12 rotate-180"
      >
    </button>
    <div class="flex sm:flex-row flex-col w-full h-full place-items-center justify-evenly">
      <router-link to="/" @click="toggleMenu()" class="menu-item">
        <p>HOME</p>
      </router-link>

      <router-link to="about" @click="toggleMenu()" class="menu-item">
        <p>ABOUT</p>
      </router-link>
      
      <router-link to="store" @click="toggleMenu()" class="menu-item">
        <p>SHOP</p>
      </router-link>
    </div>

    <div class="w-full h-12 relative justify-center hidden sm:flex">
      <div class="absolute transition-all duration-300 rounded-b-full xl w-48 flex justify-center"
          :class="{ 'h-48': !isScrolling, 'h-12': isScrolling, 'bg-none' : isScrolling, 'bg-[hsl(209,43%,73%)]': !isScrolling, 'shadow-none' : isScrolling, 'shadow-md': !isScrolling }"> 
            <img
            class="h-full"
              src="/images/Logo.webp"
            />
      </div>
    </div>

    <div class="flex sm:flex-row flex-col w-full h-full place-items-center justify-evenly">
      <!-- <router-link to="/gallery" class="menu-item">
        <p>GALLERY</p>
      </router-link>  -->

      <router-link to="faq" @click="toggleMenu()" class="menu-item">
        <p>FAQ</p>
      </router-link>

      <router-link to="contact" @click="toggleMenu()" class="menu-item">
        <p>CONTACT</p>
      </router-link>

      <!-- <router-link to="/profile" class="menu-item">
        <p>PROFILE</p>
      </router-link> -->

      <router-link to="checkout" @click="toggleMenu()" class="menu-item">
        <div class="flex place-items-center">
          <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none"
          xmlns="http://www.w3.org/2000/svg" stroke="#000000">
          <g id="SVGRepo_bgCarrier" stroke-width="0"/>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
            <g id="SVGRepo_iconCarrier">
              <path
              d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
              stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
              />
            </g>
          </svg>
          <p class="sm:block hidden">{{ cartItemCount }}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
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
      }
      ;
      if (window.scrollY > 0) {
        this.isScrolling = true;
      } else {
        this.isScrolling = false;
      };
    },
    toggleMenu() {
      if (window.innerWidth < 640) {
        this.isMenuOpen = !this.isMenuOpen;
      }
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

<style scoped>
.menu-item {
  @apply w-full  flex place-items-center justify-center text-center transition-all duration-700 h-full font-bold sm:text-lg text-xs;
}

.menu-item:hover {
  @apply shadow-xl text-TertiaryHL;
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

</style>
