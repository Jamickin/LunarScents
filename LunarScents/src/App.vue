<script setup>
import { RouterView } from "vue-router"
import SideBar from "./components/SideBar.vue"
import Stars from "./components/Stars.vue";
import Footer from "./components/Footer.vue"


</script>

<template>
    <SideBar />
    <main class="mt-12">
        <Stars />
        <RouterView />
        <Footer />
    </main>
</template>

<style scoped></style>
