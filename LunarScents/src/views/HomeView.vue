<script setup>
  import { RouterLink } from "vue-router";
</script>
<template>
  <div
    class="flex sm:h-screen h-[400px] w-screen justify-center place-items-center sm:bg-fixed sm:bg-cover bg-contain homepic"></div>
  <div
    class="flex flex-col justify-items-center place-items-center h-screen py-24">
    <div class="logo w-full h-full"></div>
    <p
      class="text-center font-bold text-slate-600 sm:px-24 md:px-12 text-2xl py-12">
      We are the one-stop for all of your holistic needs!
      Click on the shop button below to get started!
    </p>
    <div class="text-center my-16">
      <RouterLink
        to="/store"
        class="py-6 text-center text-white hover:bg-TertiaryHL font-bold bg-gray-500 p-8 transition-all rounded-2xl hover:opacity-95 hover:shadow-2xl">
        SHOP
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
  .homepic {
    background-image: url("../assets/images/All.webp");
    background-repeat: no-repeat;
  }

  .logo {
    background-image: url("../assets/images/Logo.webp");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
</style>
