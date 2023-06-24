<script setup>
import { RouterView } from "vue-router"
import SideBar from "./components/SideBar.vue"
import Stars from "./components/Stars.vue";
import Footer from "./components/Footer.vue"


</script>

<template>
    <Stars />
    <SideBar />
    <main>
        <RouterView />
    </main>
    <Footer />
</template>

<style scoped></style>
