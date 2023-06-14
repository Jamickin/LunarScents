<script setup>
import { RouterView } from "vue-router"
import SideBar from "./components/SideBar.vue"
import Footer from "./components/Footer.vue"
import Checkout from "./components/Checkout.vue"


</script>

<template>
    <SideBar />
    <Checkout />
    <main>
        <RouterView />
    </main>
    <Footer />
</template>

<style scoped></style>
