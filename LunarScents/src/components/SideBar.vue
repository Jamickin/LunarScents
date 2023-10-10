<template>
  <div
    class="transition-all duration-300 ease-in-out fixed top-0 left-0 sm:h-12 sm:w-screen h-screen flex flex-col justify-evenly bg-white sm:bg-Glass place-items-center sm:flex-row z-50 sm:text-white shadow-md"
    :class="{
      scrolling: isScrolling,
      'menu-open': isMenuOpen,
    }">
    <button @click="isMenuOpen = !isMenuOpen" class="fixed left-16 top-0 sm:hidden block" :class="{'button-visible' : isMenuOpen}"><img src="../assets/images/ArrowRight.svg" class="w-12 rotate-180"></button>
    <router-link to="/" class="menu-item">
      <p>HOME</p>
    </router-link>
    <router-link to="/about" class="menu-item">
      <p>ABOUT</p>
    </router-link>
    <router-link to="/store" class="menu-item">
      <p>SHOP</p>
    </router-link>
    <!-- <router-link to="/gallery" class="menu-item">
      <p>GALLERY</p>
    </router-link> -->
    <div class="w-full h-full relative justify-center hidden sm:flex">
      <img
        src="../assets/images/Logo.webp"
        class="absolute h-36 transition-all duration-300 z-[9999999999]"
        :class="{ large: isScrolling }" />
    </div>
    <!-- <router-link to="/faq" class="menu-item">
      <p>FAQ</p>
    </router-link> -->
    <router-link to="/contact" class="menu-item">
      <p>CONTACT</p>
    </router-link>
    <router-link to="/profile" class="menu-item">
      <p>PROFILE</p>
    </router-link>
    <router-link to="/checkout" class="menu-item mr-4">
      <p>CHECKOUT</p>
      <div class="h-12 w-12 sm:block hidden">
        <img
          src="../assets/images/CartIcon.svg"
          class="h-full" />
      </div>
    </router-link>
  </div>
</template>

<script setup>
  import { RouterLink } from "vue-router";
  import { ref, onMounted, onBeforeUnmount } from "vue";

  const isScrolling = ref(false);
  const isMenuOpen = ref(false);

  const handleScroll = () => {
    if (window.innerWidth < 640) {
      if (window.scrollY > 0) {
        isScrolling.value = true;
        isMenuOpen.value = true;
      } else {
        isScrolling.value = false;
        isMenuOpen.value = false;
      }
    } else {
      isScrolling.value = window.scrollY > 18;
    }
  };

  onMounted(() => {
    window.addEventListener("scroll", handleScroll);
  });

  onBeforeUnmount(() => {
    window.removeEventListener("scroll", handleScroll);
  });
</script>

<style scoped>
  /* img {
    @apply w-[2.7rem] cursor-pointer transition-all duration-[600ms];
  } */

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
    @apply bg-neutral-50 text-black;
  }

  .menu-open {
    left: -50%;
  }

  .large {
    @apply h-12;
  }

  .button-visible {
    display: none;
  }
</style>
