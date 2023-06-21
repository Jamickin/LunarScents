<script setup>
import { RouterView } from "vue-router"
import SideBar from "./components/SideBar.vue"
import Footer from "./components/Footer.vue"


</script>

<template>
    <SideBar />
    <main>
        <RouterView />
    </main>
    <Footer />
</template>

<style scoped></style>
