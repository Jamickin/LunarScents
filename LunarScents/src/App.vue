<script setup>
import { RouterView } from "vue-router"
import SideBar from "./components/SideBar.vue"
import Footer from "./components/Footer.vue"
import Stars from "./components/Stars.vue";



</script>

<template>
    <SideBar />
    <main class="sm:mt-12 bg-gradient-to-b from-white to-Secondary overflow-x-hidden flex justify-center">
        <RouterView />
        <Stars />
    </main>
    <Footer />

</template>

<style scoped></style>
