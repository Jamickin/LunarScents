<script setup>
import { RouterView } from "vue-router"
import Head from "./components/Head.vue"
import Footer from "./components/Footer.vue"

</script>

<template>
    <Head />
    <main>
        <RouterView />
    </main>
    <!-- <Footer /> -->
</template>

<style scoped></style>
