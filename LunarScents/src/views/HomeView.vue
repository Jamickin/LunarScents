<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
    <div class="flex h-screen px-36 flex-col -mt-12 justify-center place-items-center">
        <p class="text-center">Ever wondered if there is the perfect store for all your herbal and homeopathic needs? You've
            arrived at your destination...</p>
        <div class="text-center z-30 my-16">
            <RouterLink to="/store" class="text-center bg-Secondary p-8 rounded-2xl hover:opacity-95 z-30">STORE
            </RouterLink>
        </div>
    </div>
    <div class="flex justify-items-center place-items-center h-[700px]w-screen">
        <img src="../assets/images/Logo.png" class="h-full">
    </div>
</template>

<style scoped></style>
