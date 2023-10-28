<script setup>
import {RouterView} from "vue-router";
import SideBar from "./components/SideBar.vue";
import Footer from "./components/Footer.vue";
import Stars from "./components/Stars.vue";
</script>

<template>
  <SideBar/>
  <main
      style="min-height: 90vh"
      class="bg-gradient-to-b from-white to-Secondary sm:mt-12"
  >
    <RouterView/>
    <Stars/>
  </main>
  <Footer/>
</template>
