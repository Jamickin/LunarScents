<template>
  <div
    class="transition-all duration-300 ease-in-out fixed top-0 left-0 sm:h-12 sm:w-screen h-screen flex flex-col justify-evenly bg-white sm:bg-Glass place-items-center sm:flex-row z-50 sm:text-white shadow-md"
    :class="{
      scrolling: isScrolling,
      'menu-open': isMenuOpen,
    }">
    <router-link to="/" class="menu-item">
      <p>HOME</p>
    </router-link>
    <router-link to="/about" class="menu-item">
      <p>ABOUT</p>
    </router-link>
    <router-link to="/store" class="menu-item">
      <p>SHOP</p>
    </router-link>
    <router-link to="/gallery" class="menu-item">
      <p>GALLERY</p>
    </router-link>
    <router-link to="/faq" class="menu-item">
      <p>FAQ</p>
    </router-link>
    <router-link to="/profile" class="menu-item">
      <p>PROFILE</p>
    </router-link>
    <router-link to="/checkout" class="menu-item">
      <p>CHECKOUT</p>
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
  img {
    @apply w-[2.7rem] cursor-pointer transition-all duration-[600ms];
  }

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
</style>
