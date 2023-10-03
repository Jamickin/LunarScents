<script setup>
  import { RouterView } from "vue-router";
  import SideBar from "./components/SideBar.vue";
  import Footer from "./components/Footer.vue";
  import Stars from "./components/Stars.vue";
</script>

<template>
  <SideBar />
  <main
    class="bg-gradient-to-b from-white to-Secondary mt-12">
    <RouterView />
    <Stars />
  </main>
  <Footer />
</template>
