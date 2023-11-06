<script setup>
import {RouterView} from "vue-router";
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
import Stars from "./components/Stars.vue";
</script>

<template>
  <NavBar/>
  <main style="min-height: 90dvh;"
      class="bg-gradient-to-b from-white to-Secondary sm:mt-12"
  >
    <RouterView/>
    <Stars/>
  </main>
  <Footer/>
</template>
