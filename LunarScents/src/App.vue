<script setup>
  import { RouterView } from "vue-router";
  import TopBar from "./components/TopBar.vue";
  import Footer from "./components/Footer.vue";
  import Stars from "./components/Stars.vue";
</script>

<template>
  <TopBar />
  <main
    class="bg-gradient-to-b from-white to-Secondary sm:mt-12">
    <RouterView />
    <Stars />
  </main>
  <Footer />
</template>
