<script setup>
import { RouterView } from "vue-router"
import SideBar from "./components/SideBar.vue"
import Stars from "./components/Stars.vue";
import Footer from "./components/Footer.vue"


</script>

<template>
    <SideBar />
    <main class="mt-0 sm:mt-12 bg-gradient-to-b from-white to-Secondary overflow-x-hidden">
        <Stars />
        <RouterView />
    </main>
    <Footer />
</template>

<style scoped></style>
